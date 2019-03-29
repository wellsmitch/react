import React from 'react';
import Action from './Action'
import Store from './Store'

class Demo1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            str:Store.getState()
        };
        console.log(this)
        this.itemchange = this.itemchange.bind(this)
    }
    itemchange(){
        console.log(this)
         var data = Store.getState();
         this.setState({str:data})
    }
    componentDidMount(){
        Store.subscribe(this.itemchange)
    }
    tap(){
        console.log(this)
        Store.dispatch(Action(this.refs.ipt.value))
    }
    render(){
        return(
            <div>
                <h1>redux</h1>
                <input type="text" ref='ipt'/>
                <button onClick={this.tap.bind(this)}>添加</button>
                <hr/>
                {
                    this.state.str.map(function (item,i) {
                        return(
                            <div key={i}>{item}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Demo1
