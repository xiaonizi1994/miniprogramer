import {SET_LOADING} from "../constants";

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    isLoading
  }
}
