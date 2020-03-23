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
    const {funcName} = data;
    return funcMap[funcName]()
}

const funcMap = {
    ['getItemsById']: getItemsByUserId,
    ['addItem']: addItem,
}

function getItemsByUserId() {
    return todoItemsDB
        .get()
        .then(res => res)
}


function addItem() {
    return todoItemsDB
        .add({
            // data 字段表示需新增的 JSON 数据
            data: {
                description: "learn cloud database",
                due: new Date("2018-09-02"),
                tags: [
                    "cloud",
                    "database"
                ],
                location: new db.Geo.Point(113, 23),
                done: false
            }
        })
        .then(res => res)
        .catch(res => res)
}
