export const signin = {
    type: "SIGNIN",
    payload: {
        request: {
            method: "post",
            url: "/auth/login"
        }
    }
};

export const signup = {
    type: "SIGNUP",
    payload: {
        request: {
            method: "post",
            url: "/auth/register"
        }
    }
};