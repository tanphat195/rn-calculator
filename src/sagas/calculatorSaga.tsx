import { takeLatest, put } from 'redux-saga/effects';
import { UPDATE_CALCULATOR } from '../reducers/calculatorReducer';

export function* watchUpdateCalculator() {
  yield takeLatest('UPDATE_CALCULATOR2', handleUpdate);
}

function* handleUpdate(payload) {
  try {
    yield put({
      type: UPDATE_CALCULATOR,
      payload,
    })
  } catch (err) {

  }
}