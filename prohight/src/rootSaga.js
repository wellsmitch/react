import {fork} from 'redux-saga/effects'
import {add_} from './saga/add'


export default  function *rootSaga() {
    yield fork (add_)
}
