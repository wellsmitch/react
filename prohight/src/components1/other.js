import React, {Component} from 'react';


class Other extends Component{
    // constructor(props){
    //     super(props)
    // }
    componentWillReceiveProps(a){
        console.log(a)
    }
    componentDidMount() {
        console.log(123456, this.props)
    }
    render(){
        return(
            <div>其他</div>
        )
    }

}


export default Other
