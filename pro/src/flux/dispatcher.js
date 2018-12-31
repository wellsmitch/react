//派发器  事件调度中心  接收action  命令action修改
import {Dispatcher} from 'flux'
import Store from './Store'

const Dispatch = new Dispatcher();

Dispatch.register((action)=>{
   switch (action.actionType) {
       case 'ADD_TODO':
   //     命令store数据更新
   //        发出change事件
           Store.add(action.text);
           Store.changes();
           break;
   }
});


export default Dispatch
