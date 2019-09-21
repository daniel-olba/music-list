import {GET_DETAILS, GET_DETAILS_SUCCESS, GET_DETAILS_FAIL} from "../type";

const INITIAL_STATE = {
  getDetails: false,
  getDetailsSuccess: "",
  getDetailsFail: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        getDetails: typeof action.payload === "boolean" ? action.payload : true
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        getDetailsSuccess: action.payload
      };
    case GET_DETAILS_FAIL:
      return {
        ...state,
        getDetailsFail: action.payload
      };
    default:
      return state;
  }
}