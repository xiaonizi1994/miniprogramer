import { combineReducers } from 'redux'
import todoList from "./todoList";
import selectedIds from "./selectedIds";

export default combineReducers({
  todoList,
  selectedIds,
})
