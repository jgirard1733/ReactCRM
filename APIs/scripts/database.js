const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'Customers';


const Dynamo = {
    queryCustomers: async () => {
        var params = {
            TableName: tableName
        }
        const res = await documentClient.scan(params).promise();
        const finalResult = res.Items;
        return finalResult || [];    
    }
};

module.exports = Dynamo;