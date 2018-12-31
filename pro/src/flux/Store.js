//仓库  发出change事件
import {EventEmitter} from 'events';
//拷贝模块
import assign from 'object-assign'
//拷贝EventEmitter  及其后面的方法  到空对象  然后给到Store变量
const Store = assign({},EventEmitter.prototype,{
    Todos:[],
    add(text){
        this.Todos.push(text)
    },
    changes(){
        this.emit('change')
    },
    changelisten(callback){
        this.on('change',callback)
    },
    getAll(){
        return this.Todos
    }
});

export default Store
