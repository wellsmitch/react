import { actionType } from '../actionType/actionType'
export function addm(value) {
    return {
        type: actionType.DO_ADD,
        value
    }
}
