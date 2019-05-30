import React from 'react';
import $ from 'jquery';


class Detail extends React.Component{
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

        $.ajax({
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            type:'get',
            dataType:'json',
            data:{
                id:this.props.location.query.id
            },
            success:function (data) {
                console.log(data,888)
                _this.setState({str1:data.data.pdesc})

            }
        });
    }
    componentWillReceiveProps(a){
        console.log(a)
        var _this = this;
        // $.ajax({
        //     url:'http://jx.xuzhixiang.top/ap/api/detail.php',
        //     type:'get',
        //     dataType:'json',
        //     data:{
        //         id:a.params.id
        //     },
        //     success:function (data) {
        //         _this.setState({str1:data.data.pdesc})
        //
        //     }
        // });
    }
}


export default Detail
