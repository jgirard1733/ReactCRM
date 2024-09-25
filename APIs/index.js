const customerController = require('./controllers/customerController');
const productController = require('./controllers/productController');

const {
    DynamoDBDocument
} = require("@aws-sdk/lib-dynamodb"),
{
    DynamoDB
} = require("@aws-sdk/client-dynamodb");
const documentClient = DynamoDBDocument.from(new DynamoDB());

exports.handler = async(req, res) => {
    const routeType = req.rawPath;
    let response = null;
    let paramId = null;
    if(req.pathParameters != null)
    {
        if(req.pathParameters.id != null)
        {
            paramId = req.pathParameters.id
        }
    }

    console.log('routeType is: ' + routeType)

    if(routeType.includes("/api/getCustomers")) {
            console.log('in customers')
            response = await customerController.getCustomers(paramId);
    }
    else if(routeType.includes("/api/getProducts")) {
        console.log('in products')
        response = await productController.getProducts(paramId);
    }
    else {
        response = "Not Found"
    }

    res.succeed(JSON.stringify(response));
 }