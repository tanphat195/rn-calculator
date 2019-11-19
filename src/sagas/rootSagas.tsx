import { all, fork } from 'redux-saga/effects';
import { watchUpdateCalculator } from './calculatorSaga';

export default function* () {
  yield all([
    fork(watchUpdateCalculator),
  ]);
}