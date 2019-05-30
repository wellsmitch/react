import React, {Component} from 'react';
import $ from 'jquery';
import s from '../33.jpeg'
import {  bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import {addm} from '../action/action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            bg: {
                // background: 'red',
                height: '80px',
                backgroundImage: `url(${s})`
            },
            s:{
                width:'100px',height:'100px'
            }
        }
    }

    additem() {
        console.log(333);
        this.props.additem1()
    }

    render() {
        // const word = 'is good';
        console.log(this.props);
        console.log('00');
        return (
            <div>
                <h1 className={'d'}>首页</h1>
                <button onClick={this.additem.bind(this)}>+</button>
                <img style={this.state.s} src={s} alt=""/>
                <p>{this.bg}</p>
                <div style={this.state.bg}>fffffffffffffff</div>
            </div>

        )
    }

    componentWillMount() {
        var _this = this;
        $.ajax({
            type: 'get',
            url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data.data);
                _this.setState({arr: data.data})
            }
        })

    }
}
let mapStateToProps = (state) =>{
    console.log(state);
    return {
        con:state.doStart.state
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        additem1: bindActionCreators(addm, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
