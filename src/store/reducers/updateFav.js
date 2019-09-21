import {UPDATE_FAVORITES, UPDATE_FAVORITES_SUCCESS, UPDATE_FAVORITES_FAIL} from "../type";

const INITIAL_STATE = {
  updateFavorites: false,
  updateFavoritesSuccess: "",
  updateFavoritesFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return {
        ...state,
        updateFavorites: typeof action.payload === "boolean" ? action.payload : true
      };
    case UPDATE_FAVORITES_SUCCESS:
      return {
        ...state,
        updateFavoritesSuccess: action.payload
      };
    case UPDATE_FAVORITES_FAIL:
      return {
        ...state,
        updateFavoritesFail: action.payload
      };
    default:
      return state;
  }
}