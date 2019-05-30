import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducer';
import mySaga from './saga'
const sagaMiddleware=createSagaMiddleware();

const Store = createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);
export default Store
