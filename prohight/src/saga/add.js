import { take, call, put } from 'redux-saga/effects'
import { actionType } from '../actionType/actionType'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export function *add_delay() {
  try {
      return yield call(delay, 1500)
  }catch (e) {
      console.log(e)
  }
}

export function *add_() {
    while (true) {
        console.log(actionType.DO_ADD);
        let res = yield take(actionType.DO_ADD);
        let response = yield call(add_delay,res.value);
        console.log(response,'ggrfs');
        yield put({
            type: 'DO_ADD_',//  为了区分DO_ADD  防止连续加了两次
            // data: list
        })

    }
}
