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

export const user = {
    type: "USER",
    payload: {
        request: {
            method: "get",
            url: "users/me"
        }
    }
};