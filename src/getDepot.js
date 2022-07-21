const axios = require('./createAxios')
const path = require('./path.js')
const { concatUrl } = require('./utils')

// 获取wolai工作台
module.exports = async () => {
    const data = await axios({
        url: concatUrl(path.getWorkspaceData),
        method: 'post',
        data: {}
    })
    if (data) {
        const { workspaces } = data
        return workspaces
    }
}