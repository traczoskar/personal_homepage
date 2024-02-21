import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} from "./personalHomepageSlice";
import { getAPIData } from "./getAPIData";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(2000);
    const repositories = yield call(getAPIData, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
