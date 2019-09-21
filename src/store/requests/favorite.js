export const getFavorites = {
  type: "GET_FAVORITES",
  payload: {
    request: {
      method: "get",
      url: "/user-favorites/"
    }
  }
};

export const addFavorite = {
  type: "UPDATE_FAVORITES",
  payload: {
    request: {
      method: "post",
      url: "/user-favorites/"
    }
  }
};

export const deleteFavorite = {
  type: "UPDATE_FAVORITES",
  payload: {
    request: {
      method: "delete",
      url: "/user-favorites/"
    }
  }
};