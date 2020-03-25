import {TOGGLE} from "../constants";

const INITIAL_STATE = []

export default function selectedIds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE: {
      return toggle(state, action.id);
    }
    default:
      return state
  }
}

const toggle = (state, id) => {
  const index = state.indexOf(id);
  if (index > -1) {
    state.splice(index, 1);
  } else {
    state.push(id);
  }
  return state;
}

