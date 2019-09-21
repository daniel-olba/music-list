import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import songs from "./songs";
import songDetails from "./songDetails";

export default combineReducers({
  signin,
  signup,
  songs,
  songDetails
});