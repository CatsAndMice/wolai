const axios = require('./createAxios')
const path = require('./path.js')
const { concatUrl } = require('./utils')

module.exports = async (page) => {
    const data = await axios({
        url: concatUrl(path.getData),
        method: 'post',
        data: {
            requests: page
        }
    })

    return data
}