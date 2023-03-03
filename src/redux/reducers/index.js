import { combineReducers } from "redux";
import getChapterReducer from "./getChapterReducer";
import themeReducer from "./themeReducer";
import langReducer from "./languageReducer";
const rootReducer = combineReducers({
  getChapterReducer,themeReducer,langReducer
});

export default rootReducer;
