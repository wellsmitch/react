import React from 'react';

class About extends React.Component{
    // constructor(props){
    //     super(props)
    // }
tap(){
    this.props.history.push('/other')
}
    render(){
        return(
            <div>
                <div>关于</div>
                <button onClick={this.tap.bind(this)}>跳转到other</button>
            </div>

        )
    }
}


export default About
