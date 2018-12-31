import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router';

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
                <h2>首页</h2>
                <hr/>
                <div>
                    {
                        this.state.arr.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <Link to={{pathname:'/detail',query:{id:item.pid}}}> {item.pname} </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <div>{this.props.children}</div>
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
