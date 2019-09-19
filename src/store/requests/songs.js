export const getSongs = {
  type: "GET_SONGS",
  payload: {
    request: {
      method: "get",
      url: "/songs"
    }
  }
};