const cloud = require('wx-server-sdk')


cloud.init()

const db = cloud.database();
const todoItemsDB = db.collection('todo_items');

const wxContext = cloud.getWXContext();

// 云函数入口函数
exports.main = async (data, context) => {
    const wxContext = cloud.getWXContext();
    const {funcName, args} = data;
    return funcMap[funcName](args, wxContext)
}

const funcMap = {
    ['getItemsById']: getItemsByUserId,
    ['addItem']: addItem,
    ['batchDelete']: batchDelete,
}

function getItemsByUserId(args, wxContext) {
    return todoItemsDB
        .where({
            openId: wxContext.OPENID,
        })
        .get()
        .then(res => res)
}


function addItem(args, wxContext) {
    return todoItemsDB
        .add({
            // data 字段表示需新增的 JSON 数据
            data: {
                ...args,
                createdTime: new Date(),
                updatedTime: new Date(),
                openId: wxContext.OPENID,
                done: false
            }
        })
        .then(res => res)
        .catch(res => res)
}

function batchDelete(args, wxContext) {
    const log = cloud.logger()
    log.info({
        name: 'dlelt',
        id: args,
    })
    const _ = db.command;
    return todoItemsDB.where({
        openId: wxContext.OPENID,
        _id: _.in(args)
    }).remove()
        .then(res => res)
        .catch(res => res)

}
