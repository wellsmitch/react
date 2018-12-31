//动作层

const Acion = {
    addItem(text){
        return{
            actionType:'ADD_TODO',//动作类型
            text:text//动作携带的数据
        }
    }
};
export default Acion
