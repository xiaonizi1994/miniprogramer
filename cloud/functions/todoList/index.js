const cloud = require('wx-server-sdk')


cloud.init()

const db = cloud.database();
const todoItemsDB = db.collection('todoItems');

const _wxContext = cloud.getWXContext();
const wxContext = {
    openid: _wxContext.OPENID,
    appid: _wxContext.APPID,
    unionid: _wxContext.UNIONID,
}


// 云函数入口函数
exports.main = async (event, context) => {
    // const { funcName, data } = event;
    const a = await getItemsByUserId();
    return a;
    // return funcMap['getItemsById']()
}

const funcMap = {
    ['getItemsById']: getItemsByUserId,
}

function getItemsByUserId() {
    todoItemsDB.where({
        _openid: wxContext.openid,
        done: false
    }).get({
        success: function (res) {
            return res
        }
    })
}
