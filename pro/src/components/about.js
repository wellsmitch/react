import React from 'react';
import {hashHistory} from 'react-router';
import Store from '../redux/Store'

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            str:Store.getState()
        };
    }
tap(){
    hashHistory.push('/other')
}
    render(){
        return(
            <div>
                <div>关于</div>

                <div>{this.state.str}-wwwwwwwwwwwwwww</div>
                <button onClick={this.tap.bind(this)}>跳转到other</button>
            </div>

        )
    }
}


export default About
