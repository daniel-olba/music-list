import { USER, USER_SUCCESS, USER_FAIL } from "../type";

const INITIAL_STATE = {
  user: false,
  userSuccess: false,
  userFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: typeof action.payload === "boolean" ? action.payload : true
      };
    case USER_SUCCESS:
      return {
        ...state,
        userSuccess: action.payload
      };
    case USER_FAIL:
      return {
        ...state,
        userFail: action.payload
      };
    default:
      return state;
  }
}