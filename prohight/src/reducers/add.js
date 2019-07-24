// import {actionType} from '../actionType/actionType';

const initialState = {
    a: 0
};

// function e(s) {
//     return s
// }
var e = (s) =>s;



export function doStart (state =initialState, action) {
    console.log(state, '--------');//{...state},action.type, action,
    switch (action.type) {
        case 'DO_ADD_':
            state.a++;

            return {...state}; //{...state}  与state表示的东西一样  这样写可以解决mapStateToProps中（state）获取不到值的问题
        default:
            return state;
    }
}
