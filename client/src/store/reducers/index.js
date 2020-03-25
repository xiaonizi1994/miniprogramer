import { combineReducers } from 'redux'
import todoList from "./todoList";
import selectedIds from "./selectedIds";
import loading from "./loading";

export default combineReducers({
  todoList,
  selectedIds,
  loading,
})
