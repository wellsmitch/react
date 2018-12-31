//顶层容器  可以调用setState
import React from 'react';
import Demo from './demo';
import Action from './Action';
import Dispatch from './dispatcher';
import Store from './Store';

class Todocontroller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            str:Store.getAll()
        };
        this.itemchange = this.itemchange.bind(this)
    }
    additem(text){
        Dispatch.dispatch(Action.addItem(text))
    }
    itemchange(){
        var data  = Store.getAll();
        this.setState({str:data})
    }
    componentDidMount(){
        Store.changelisten(this.itemchange)
    }
    render(){
        return(
            <div>
                <h1>顶层容器</h1>
               <Demo name={this.additem} str={this.state.str}/>
            </div>
        )

    }
}
export default Todocontroller
