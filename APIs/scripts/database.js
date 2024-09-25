const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();


const Dynamo = {
    queryCustomer: async (tableName, paramId) => {
        console.log('querying the customer with: ' + paramId)
        var params = {
            TableName: tableName,
            KeyConditionExpression: "id = :qval",
            ExpressionAttributeValues: {
                ':qval' : parseInt(paramId)
            },
        }
        const res = await documentClient.query(params).promise();
        const finalResult = res.Items;
        return finalResult || [];    
    },
    queryAllCustomers: async (tableName) => {
        console.log('querying all customers')
        var params = {
            TableName: tableName

        }
        const res = await documentClient.scan(params).promise();
        const finalResult = res.Items;
        return finalResult || [];    
    },
    queryProduct: async (tableName, paramId) => {
        console.log('querying the product with: ' + paramId)
        var params = {
            TableName: tableName,
            KeyConditionExpression: "id = :qval",
            ExpressionAttributeValues: {
                ':qval' : parseInt(paramId)
            },
        }
        const res = await documentClient.query(params).promise();
        const finalResult = res.Items;
        return finalResult || [];    
    },
    queryAllProducts: async (tableName) => {
        console.log('querying all products')
        var params = {
            TableName: tableName

        }
        const res = await documentClient.scan(params).promise();
        const finalResult = res.Items;
        return finalResult || [];    
    },
};

module.exports = Dynamo;