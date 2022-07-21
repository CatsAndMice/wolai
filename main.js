const getDepot = require('./src/getDepot');
(async() => {
    const depot =await getDepot()

    console.log(depot);


})()