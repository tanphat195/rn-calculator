import { takeLatest, put } from 'redux-saga/effects';
import { UPDATE_CALCULATOR } from '../reducers/calculatorReducer';

export function* watchUpdateCalculator() {
  yield takeLatest('INVOKE_CALCULATOR', handleUpdate);
}

function* handleUpdate(action) {
  try {
    yield put({
      type: UPDATE_CALCULATOR,
      payload: action.payload,
    })
  } catch (err) {

  }
}