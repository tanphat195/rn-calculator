import { all, fork } from 'redux-saga/effects';
import { WATCH_PRESS_KEY } from './calculatorSaga';

export default function* () {
  yield all([
    fork(WATCH_PRESS_KEY),
  ]);
}