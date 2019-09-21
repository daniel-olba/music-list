import {GET_FAVORITES, GET_FAVORITES_SUCCESS, GET_FAVORITES_FAIL} from "../type";

const INITIAL_STATE = {
  getFavorites: false,
  getFavoritesSuccess: "",
  getFavoritesFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        getFavorites: typeof action.payload === "boolean" ? action.payload : true
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        getFavoritesSuccess: action.payload
      };
    case GET_FAVORITES_FAIL:
      return {
        ...state,
        getFavoritesFail: action.payload
      };
    default:
      return state;
  }
}