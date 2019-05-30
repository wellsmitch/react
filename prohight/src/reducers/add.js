import {actionType} from '../actionType/actionType';

const initialState = {
    a: 0
};

export function doStart (state =initialState, action) {
    console.log(state,action.type, '--------')
    switch (action.type) {
        case 'DO_ADD_':
            state.a++;
            return state;
        default:
            return state;
    }
}
