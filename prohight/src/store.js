import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './rootSaga'

// 创建一个saga中间件
const sagaMiddleWare = createSagaMiddleware();

// 创建store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;
