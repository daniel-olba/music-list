import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import songs from "./songs";
import songsSearch from "./songsSearch";
import songDetails from "./songDetails";
import user from "./user";
import favorites from "./favorites";
import updateFav from "./updateFav";

export default combineReducers({
  signin,
  signup,
  songs,
  songsSearch,
  songDetails,
  user,
  favorites,
  updateFav
});