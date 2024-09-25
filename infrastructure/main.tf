locals {
  app_hosted_zone_domain = "${var.app_hosted_zone_name}.${var.root_domain}"
  sample_app_domain      = "${var.app_subdomain}.${local.app_hosted_zone_domain}"
}

data "aws_caller_identity" "current" {}

# create vpc
module "vpc" {
  source                        = "./modules/vpc"
  region                        = var.region
  project_name                  = var.project_name
  vpc_data                      = var.vpc_data
  ecs_service_security_group_id = module.ecs.ecs_service_security_group_id
}

# create nat gateway
module "nat_gateway" {
  source              = "./modules/nat"
  vpc_id              = module.vpc.vpc_id
  vpc_data            = var.vpc_data
  public_subnets      = module.vpc.public_subnets
  private_app_subnets = module.vpc.private_app_subnets
  private_db_subnets  = module.vpc.private_db_subnets
}

# create iam role
module "iam" {
  source = "./modules/iam"
}

module "route53" {
  # Data block to fetch root domain
data "aws_route53_zone" "root_domain" {
  name = "${var.root_domain}"
}

# Create hosted zone for the application to use
resource "aws_route53_zone" "hosted_zone" {
  name = "${var.hosted_zone_domain}"
}

# Add NS record for application hosted zone in root domain hosted zone
module "route53_root_dns_records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 2.0"

  zone_name = data.aws_route53_zone.root_domain.name

  records = [
    {
      name    = "${var.hosted_zone_name}"
      type    = "NS"
      ttl     = 60
      records = aws_route53_zone.hosted_zone.name_servers
    }
  ]
}

# Add DNS records in app hosted zone. Create A record for app_subdomain to point to cloudfront
module "route53_app_dns_records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 2.0"

  zone_name = aws_route53_zone.hosted_zone.name

  records = [
    {
      name = "${var.subdomain}"
      type = "A"
      alias = {
        name                   = var.a_record_alias_domain_name
        zone_id                = var.a_record_alias_zone_id
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [
    aws_route53_zone.hosted_zone
  ]
}
}

# Create acm certificate
module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 4.0"

  domain_name         = "*.${local.app_hosted_zone_domain}"
  zone_id             = module.route53.hosted_zone_zone_id
  wait_for_validation = true

  tags = {
    Name = "${local.sample_app_domain}"
  }

  depends_on = [
    module.route53.hosted_zone
  ]
}

# Create application load balancer
module "alb" {
  source              = "./modules/alb"
  public_subnets      = module.vpc.public_subnets
  vpc_id              = module.vpc.vpc_id
  project_name        = var.project_name
  app_name            = var.app_name
  acm_certificate_arn = module.acm.acm_certificate_arn
}

# Create ecs cluster, service and task definition
module "ecs" {
  source                          = "./modules/ecs"
  region                          = var.region
  project_name                    = var.project_name
  app_name                        = var.app_name
  private_app_subnets             = module.vpc.private_app_subnets
  vpc_id                          = module.vpc.vpc_id
  load_balancer_security_group_id = module.alb.alb_security_group_id
  target_group_arn                = module.alb.target_group_arn
  ecs_task_execution_role_arn     = module.iam.ecs_task_execution_role_arn
  image_path                      = replace(replace(var.image_path, "208237728993", data.aws_caller_identity.current.account_id), "{region}", var.region)
  image_tag                       = var.image_tag
}