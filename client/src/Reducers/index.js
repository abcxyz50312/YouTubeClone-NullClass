import { combineReducers } from "redux";

import authReducer from "./auth";
import chanelReducers from "./chanel";
import currentUserReducer from "./currentUser";
import videoReducer from "./Video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import commentReducer from "./comments";
import HistoryReducer from "./history";

export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  HistoryReducer,commentReducer
});
