import { takeLatest, put } from 'redux-saga/effects';
import { ON_PRESS_KEY } from '../reducers/calculatorReducer';

export function* WATCH_PRESS_KEY() {
  yield takeLatest('WATCH_PRESS_KEY', workerPressKey);
}

function* workerPressKey(action) {
  try {
    yield put({
      type: ON_PRESS_KEY,
      payload: action.payload,
    })
  } catch (err) {

  }
}