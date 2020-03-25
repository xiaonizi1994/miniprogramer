import {ADD, DEL, GET_ALL, UPDATE} from "../constants";

export const add = item => {
  return {
    type: ADD,
    item,
  }
}

export const getAll = () => {
  return {
    type: GET_ALL,
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
