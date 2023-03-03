import { combineReducers } from "redux";
import getChapterReducer from "./getChapterReducer";
import themeReducer from "./themeReducer";
import langReducer from "./languageReducer";
import sidebarReducer from "./sidebarReducer";
const rootReducer = combineReducers({
  getChapterReducer,
  themeReducer,
  langReducer,
  sidebarReducer,
});

export default rootReducer;
