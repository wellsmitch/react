import React, {Component} from 'react';
import $ from 'jquery';


class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            str1:''
        }
    }

    render(){
        return(
            <div>
                <div>详情</div>
                <div>{this.state.str1}</div>
            </div>

        )
    }
    componentDidMount(){
        var _this = this;
        // $.ajax({
        //     url:'http://jx.xuzhixiang.top/ap/api/detail.php',
        //     type:'get',
        //     dataType:'json',
        //     data:{
        //         id:this.props.params.id
        //     },
        //     success:function (data) {
        //         _this.setState({str1:data.data.pdesc})
        //
        //     }
        // });
        console.log(this.props.location.query.id)
        $.ajax({
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            type:'get',
            dataType:'json',
            data:{
                id:_this.props.location.query.id
            },
            success:function (data) {
                console.log(data,888)
                _this.setState({str1:data.data.pdesc})

            }
        });
    }
    componentWillReceiveProps(a, b){
        console.log(a, b)
        console.log(a.location.query.id)
        var _this = this;
        $.ajax({
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            type:'get',
            dataType:'json',
            data:{
                id:a.location.query.id
            },
            success:function (data) {
                console.log(data.data.pdesc)
                _this.setState({str1:data.data.pdesc})

            }
        });
    }
}


export default Detail
