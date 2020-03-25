import {SET_LOADING} from "../constants";

const INITIAL_STATE = false;
export default function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADING: {
      return action.isLoading
    }
    default:
      return state
  }
}
