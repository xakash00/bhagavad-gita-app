import { combineReducers } from "redux";
import getChapterReducer from "./getChapterReducer";
import themeReducer from "./themeReducer"
const rootReducer = combineReducers({
  getChapterReducer,themeReducer
});

export default rootReducer;
