import React from 'react';
import $ from 'jquery'



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }



    render(){
        return(
            <div>
<h1>首页</h1>

            </div>

        )
    }
    componentWillMount(){
        var _this = this;
        $.ajax({
            type:'get',
            url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
            data:{

            },
            dataType:'json',
            success:function(data){
                console.log(data.data);
                _this.setState({arr:data.data})
            }
        })

    }
}


export default Home
