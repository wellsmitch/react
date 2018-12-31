const Action = function (text) {
    return{
        type:'add_todo',
        text:text
    }
};
export default Action
