const cloud = require('wx-server-sdk')


cloud.init()

const db = cloud.database();
const todoItemsDB = db.collection('todo_items');

const _wxContext = cloud.getWXContext();
const wxContext = {
    openid: _wxContext.OPENID,
    appid: _wxContext.APPID,
    unionid: _wxContext.UNIONID,
}


// 云函数入口函数
exports.main = async (data, context) => {
    const {funcName, args} = data;
    return funcMap[funcName](args)
}

const funcMap = {
    ['getItemsById']: getItemsByUserId,
    ['addItem']: addItem,
}

function getItemsByUserId() {
    return todoItemsDB
        .where({
            openId: wxContext.openid
        })
        .get()
        .then(res => res)
}


function addItem(args) {
    return todoItemsDB
        .add({
            // data 字段表示需新增的 JSON 数据
            data: {
                ...args
            }
        })
        .then(res => res)
        .catch(res => res)
}
