import { HYDRATE } from "next-redux-wrapper";
import { FAILED, LOADED, LOADING } from "../actions/returnTypes";

const initialState = {
  loading: true,
  success: false,
  error: false,
  chapterData: null,
};

function getChapterReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.getChapterReducer };
    }
    case LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        chapterData: null,
      };

    case LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        chapterData: action.chapterData,
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        chapterData: null,
      };

    default:
      return state;
  }
}

export default getChapterReducer;
