import {GET_PROGRAMS, GET_PROGRAMS_OK} from '../actionTypes/home';
import {takeLatest, put} from 'redux-saga/effects';
import { createUrl,ajaxCall } from '../../../common/Utils'

const getPrograms = function* ({payload}) {
    const url = createUrl('free');
    const response = yield ajaxCall(url,payload.params,'GET');
    if (response) {
        yield put({type: GET_PROGRAMS_OK, payload: response});
    }
};

export function* getProgramsSaga() {
  yield takeLatest(GET_PROGRAMS, getPrograms);
}