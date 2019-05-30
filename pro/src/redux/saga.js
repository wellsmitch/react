import { takeEvery, put, call } from 'redux-saga/effects';
// import * as actionCreators from './actionCreators'
// import * as actionType from './actionType'
// import axios from 'axios'
// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// function *getInitList() {
//     // const res = yield axios.get('./a.json'); //等待异步返回数据并赋值
//     yield call(delay, 1000);
//     // yield put(actionCreators.initList(res)) // put 派遣action
//     yield put({ type: 'add_todo_async' }) // put 派遣action
// }
//
function *mySaga() {
    console.log('hello sagas')
    // yield takeEvery("add_todo_async", getInitList)// 接收到action后执行对应的方法
}

export default mySaga;
