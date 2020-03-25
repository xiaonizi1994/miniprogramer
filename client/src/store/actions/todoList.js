import {ADD, DEL, FETCH_ALL, UPDATE} from "../constants";
import Taro from "@tarojs/taro";
import {dbMethodName} from "../../utils/dbMethodName";

export const add = item => {
  return {
    type: ADD,
    item,
  }
}

export const receiveAll = (items) => {
  return {
    type: FETCH_ALL,
    todoList: items
  }
}

export const update = (item) => {
  return {
    type: UPDATE,
    item,
  }
}

export const delItem = (item) => {
  return {
    type: DEL,
    item,
  }
}

export const fetchAll = () => {
  return (dispatch)=>Taro.cloud
    .callFunction({
      name: 'todoList',
      data: {
        funcName: dbMethodName.getItemsById,
      }
    })
    .then(res => {
      return res.result.data;
    })
    .then(data=>dispatch(receiveAll(data)))
};
