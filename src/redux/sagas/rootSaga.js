
import { all } from "redux-saga/effects";
import { watchGetChapterSaga } from "./homeSaga";
function* rootSaga() {
  yield all([
    watchGetChapterSaga()
  ]);
}

export default rootSaga;
