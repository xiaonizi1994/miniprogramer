import {ADD, DEL, FETCH_ALL, UPDATE} from "../constants";

export const add = item => {
  return {
    type: ADD,
    item,
  }
}

export const fetchAll = (items) => {
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
