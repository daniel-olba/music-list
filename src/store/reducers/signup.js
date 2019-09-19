import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../type";

const INITIAL_STATE = {
    signup: false,
    signupSuccess: "",
    signupFail: ""
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                signup: typeof action.payload === "boolean" ? action.payload : true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupSuccess: action.payload
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                signupFail: action.payload
            };
        default:
            return state;
    }
}