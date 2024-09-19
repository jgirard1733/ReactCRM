const customerController = require('./controllers/customerController');

const {
    DynamoDBDocument
} = require("@aws-sdk/lib-dynamodb"),
{
    DynamoDB
} = require("@aws-sdk/client-dynamodb");
const documentClient = DynamoDBDocument.from(new DynamoDB());

exports.handler = async(req, res) => {
    let response = await customerController.getCustomers();
    res.succeed(response);
 }