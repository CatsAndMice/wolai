module.exports = async (depot = []) => {
    const depotMap = new Map()
    depot.forEach(m => {
        const { id, name } = m
        //每一个仓库对应一个菜单
        const menuMap = new Map()
        


        //每一个仓库对应一个menu Map
        depotMap.set(name, menuMap)
    })
}