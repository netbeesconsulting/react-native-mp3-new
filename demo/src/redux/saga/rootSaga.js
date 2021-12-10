import {call, all} from 'redux-saga/effects';
import {getProgramsSaga} from './actions/home';

export function* rootSaga() {
  yield all([getProgramsSaga()]);
}
