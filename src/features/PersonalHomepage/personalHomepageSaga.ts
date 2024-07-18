import {
  takeLatest,
  call,
  put,
  delay,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} from "./personalHomepageSlice";
import { getAPIData } from "./getAPIData";
import { Repository } from "../../types/types";
import { gitHubUsername } from "./Portfolio/gitHubUsername";

interface FetchRepositoriesAction {
  payload: string;
  type: string;
}

function* fetchRepositoriesHandler({
  payload: username,
}: FetchRepositoriesAction): Generator<
  CallEffect<Repository[]> | PutEffect,
  void,
  Repository[]
> {
  try {
    yield delay(2000);
    const repositories = yield call(getAPIData, gitHubUsername);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
