const db = require('../scripts/database');

async function getCustomers() {
    let locationResult;
    try {
        locationResult = await(db.queryCustomers());
        locationResult = JSON.stringify(locationResult);
        return locationResult;
    }
    catch(err){
        console.log(err);
        return 500 + err;
    }
}

module.exports = {getCustomers}