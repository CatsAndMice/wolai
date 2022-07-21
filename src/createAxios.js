const axios = require('axios')
const config = require('../config')
const { isEmpty, isObject, eq } = require('medash')

const SUCCESS_CODE = 1000
const instance = axios.create({
    baseURL: 'https://api.wolai.com/v1',
    timeout: 1000,
    headers: { Cookie: config.Cookie }
})

instance.interceptors.response.use((result) => {
    result = result.data
    if (!isObject(result)) return
    if (isEmpty(result)) return
    const { code, data } = result
    return eq(code, SUCCESS_CODE) ? data : null
})

module.exports = instance

