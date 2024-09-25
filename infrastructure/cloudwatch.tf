# cloudwatch.tf

# Set up CloudWatch group and log stream and retain logs for 30 days
resource "aws_cloudwatch_log_group" "reactcrm_log_group" {
  name              = "/ecs/reactcrm-app"
  retention_in_days = 30

  tags = {
    Name = "reactcrm-log-group"
  }
}

resource "aws_cloudwatch_log_stream" "reactcrm_log_stream" {
  name           = "reactcrm-log-stream"
  log_group_name = aws_cloudwatch_log_group.reactcrm_log_group.name
}