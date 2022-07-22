const getPage = require('./getPage')
const { isEmpty } = require("medash")

const getPagesInfo = async (pages = []) => {
    const query = []
    pages.forEach(page => {
        query.push({ table: 'wolai.block', id: page })
    })
    return await getPage(query)
}


const getTitle = (pageRequest) => {
    const menuSet = new Set()
    pageRequest.forEach(pr => {
        const { value } = pr
        const { attributes } = value
        //顶层标题
        const title = attributes.title[0][0]
        menuSet.add(title)
    })
    return menuSet
}

module.exports = async (depot = []) => {
    return new Promise((resolve) => {
        const depotMap = new Map()
        const promiseArr = []
        depot.forEach(m => {
            const promiseFn = async () => {
                const { name, pages } = m
                //每一个仓库对应一个菜单
                const pageRequest = await getPagesInfo(pages)
                const menuSet = isEmpty(pageRequest) ? null : getTitle(pageRequest)
                //每一个仓库对应一个menu Set
                isEmpty(menuSet) ? null : depotMap.set(name, menuSet)
            }
            promiseArr.push(promiseFn())
        })

        Promise.all(promiseArr).then(() => {
            resolve(depotMap)
        })
    })
}