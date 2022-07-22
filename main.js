const getDepot = require('./src/getDepot');
const getMenu = require('./src/getMenu');

(async () => {
    const depot = await getDepot()
    const menu = await getMenu(depot)
    console.log(menu);
})()