import {GET_SONGS, GET_SONGS_SUCCESS, GET_SONGS_FAIL} from "../type";

const INITIAL_STATE = {
  getSongs: false,
  getSongsSuccess: "",
  getSongsFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        getSongs: typeof action.payload === "boolean" ? action.payload : true
      };
    case GET_SONGS_SUCCESS:
      return {
        ...state,
        getSongsSuccess: action.payload
      };
    case GET_SONGS_FAIL:
      return {
        ...state,
        getSongsFail: action.payload
      };
    default:
      return state;
  }
}