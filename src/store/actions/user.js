import Interceptor from "../Interceptor";
import { setToken } from "../../Cookies";

export const signup = (data, callback, erroCallback) => async dispatch => {
  return dispatch(
    Interceptor(
      { action: "signup", data },
      (type, response) => {
        dispatch({
          type,
          payload: response.data
        });

        if (callback) callback(response.data);
      },
      (type, error) => {
        dispatch({
          type,
          payload: error
        });
        if (erroCallback) erroCallback(error);
      }
    )
  );
};

export const signin = (data, callback, erroCallback) => dispatch => {
  return dispatch(
    Interceptor(
      { action: "signin", data },
      (type, response) => {
        dispatch({
          type,
          payload: response.data
        });
        setToken(response.data.token);
        if (callback) callback(response.data);
      },
      (type, error) => {
        dispatch({
          type,
          payload: error
        });

        if (erroCallback) erroCallback(error);
      }
    )
  );
};