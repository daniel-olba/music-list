import Interceptor from "../Interceptor";

export const getSongs = (callback, erroCallback) => async dispatch => {
  return dispatch(
    Interceptor(
      { action: "getSongs" },
      (type, response) => {
        dispatch({
          type,
          payload: response.data
        });

        callback();
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