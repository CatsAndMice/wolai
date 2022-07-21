const axios = require('./createAxios')
const concatUrl = (path) => axios.defaults.baseURL + path
module.exports = {
    concatUrl
}