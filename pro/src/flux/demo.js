//view 视图层
import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props)
    }
    tap(){
        this.props.name(this.refs.ipt.value)
    }
    render(){
        return(
            <div>
                <h1>视图</h1>
                <input type="text" ref='ipt'/>
                <button onClick={this.tap.bind(this)}>添加</button>
                <hr/>
                {
                    this.props.str.map((item,i)=>{
                        return(
                            <div key={i}>{item}</div>
                        )
                    })
                }
            </div>
        )

    }
}
export default Demo
