import { createStore, applyMiddleware } from 'redux';
import createSageMiddleWare from 'redux-saga';
import rootReducers from '../reducers/rootReducer';
import rootSagas from '../sagas/rootSagas'

const sageMiddleWare = createSageMiddleWare();
const store = createStore(
  rootReducers,
  applyMiddleware(
    sageMiddleWare,
  )
);

sageMiddleWare.run(rootSagas);

export default store;