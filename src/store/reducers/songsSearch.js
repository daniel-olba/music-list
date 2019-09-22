import {GET_SONGS_SEARCH, GET_SONGS_SEARCH_SUCCESS, GET_SONGS_SEARCH_FAIL} from "../type";

const INITIAL_STATE = {
  getSongsSearch: false,
  getSongsSearchSuccess: [],
  getSongsSearchFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SONGS_SEARCH:
      return {
        ...state,
        getSongsSearch: typeof action.payload === "boolean" ? action.payload : true
      };
    case GET_SONGS_SEARCH_SUCCESS:
      return {
        ...state,
        getSongsSearchSuccess: action.payload
      };
    case GET_SONGS_SEARCH_FAIL:
      return {
        ...state,
        getSongsSearchFail: action.payload
      };
    default:
      return state;
  }
}