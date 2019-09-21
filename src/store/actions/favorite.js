import Interceptor from "../Interceptor";

export const getFavorites = (callback, erroCallback) => async dispatch => {
  return dispatch(
    Interceptor(
      { action: "getFavorites" },
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
        if (erroCallback) erroCallback(error);
      }
    )
  );
};

export const addFavorite = (data, callback, erroCallback) => dispatch => {
  return dispatch(
    Interceptor(
      { action: "addFavorite", data },
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

        if (erroCallback) erroCallback(error);
      }
    )
  );
};

export const deleteFavorite = (data, callback, erroCallback) => dispatch => {
  return dispatch(
    Interceptor(
      { action: "deleteFavorite", data },
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

        if (erroCallback) erroCallback(error);
      }
    )
  );
};