export const getSongs = {
  type: "GET_SONGS",
  payload: {
    request: {
      method: "get",
      url: "/songs"
    }
  }
};

export const getSongsSearch = {
  type: "GET_SONGS_SEARCH",
  payload: {
    request: {
      method: "get",
      url: "/songs"
    }
  }
};

export const getDetails = {
  type: "GET_DETAILS",
  payload: {
    request: {
      method: "get",
      url: "/songs/:id"
    }
  }
};