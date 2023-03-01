import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  FAILED,
  LOADED,
  LOADING,
} from "../actions/returnTypes";
import {
  FETCH_HEADLINES,
} from "../actions/types";
import * as homeApis  from "../apis/homeApis";

function* getChapterSaga() {
  try {
    yield put({ type: LOADING });
    const res = yield call(homeApis.getChapterApi);
    console.log(res)
    yield put({ type: LOADED, chapterData: res.data });
  } catch (err) {
    console.log(err);
    yield put({ type: FAILED, chapterData: "Something went wrong !" });
  }
}



export function* watchGetChapterSaga() {
  yield takeLatest(FETCH_HEADLINES, getChapterSaga);
}
