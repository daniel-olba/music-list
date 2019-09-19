import {SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL} from "../type";

const INITIAL_STATE = {
    signin: false,
    signinSuccess: false,
    signinFail: ""
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                signin: typeof action.payload === "boolean" ? action.payload : true
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signinSuccess: action.payload
            };
        case SIGNIN_FAIL:
            return {
                ...state,
                signinFail: action.payload
            };
        default:
            return state;
    }
}