import {ADD, DEL, FETCH_ALL, UPDATE} from "../constants";

const INITIAL_STATE = []

export default function todoList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD: {
      state.push(item);
      return state;
    }
    case FETCH_ALL: {
      return action.todoList;
    }
    case UPDATE:
      return [
        ...state,
        item
      ]
    case DEL: {
      const i = state.find((todo, index) => {
        if (todo.id = item.id) {
          return index;
        }
      });
      console.log('i');
      return state.splice(i, 1);
    }
    default:
      return state
  }
}

