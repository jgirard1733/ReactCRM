const db = require('../scripts/database');

async function getCustomers(paramId) {
    let locationResult;
    try {
        if(paramId !== null)
        {
            console.log('have paramId of: ' + paramId)
            locationResult = await(db.queryCustomer("Customers",paramId));
        }
        else 
        {
            console.log('have no paramId')
            locationResult = await(db.queryAllCustomers("Customers"));
        }
        return locationResult;
    }
    catch(err){
        console.log(err);
        return 500 + err;
    }
}

module.exports = {getCustomers}