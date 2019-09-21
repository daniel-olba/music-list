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

export const getDetails = (id, callback, errorCallback) => async dispatch => {
  return dispatch(
    Interceptor({
      action: "getDetails",
      identifiers: [id]
    },
    (type, response) => {
      dispatch({
        type,
        payload: response.data
      });
      if (callback) callback();

    },
    (type, error) => {
      dispatch({
        type,
        payload: error
      });
      if (errorCallback) errorCallback(error);
    }
  ))
};