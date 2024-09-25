const db = require('../scripts/database');

async function getProducts(paramId) {
    let locationResult;
    try {
        if(paramId !== null)
        {
            console.log('have paramId of: ' + paramId)
            locationResult = await(db.queryProduct("Products",paramId));
        }
        else 
        {
            console.log('have no paramId')
            locationResult = await(db.queryAllProducts("Products"));
        }
        return locationResult;
    }
    catch(err){
        console.log(err);
        return 500 + err;
    }
}

module.exports = {getProducts}