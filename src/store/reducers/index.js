import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import songs from "./songs";

export default combineReducers({
  signin,
  signup,
  songs
});