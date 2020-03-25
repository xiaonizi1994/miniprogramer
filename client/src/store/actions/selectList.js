import {TOGGLE} from "../constants";

export const toggle = id => {
  return {
    type: TOGGLE,
    id,
  }
}

