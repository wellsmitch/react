import React from 'react';
import $ from 'jquery';
import s from '../33.jpeg'


class Home extends React.Component {
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


    render() {
        const word = 'is good'
        return (
            <div>
                <h1 className={'d'}>首页</h1>
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


export default Home
