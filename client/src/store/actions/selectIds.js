import {CLEAN, TOGGLE} from "../constants";

export const toggle = id => {
  return {
    type: TOGGLE,
    id,
  }
}

export const clean = () => {
  return {
    type: CLEAN,
  }
}


