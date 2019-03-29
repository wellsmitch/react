import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[],
            arr2:[
                {
                    "id": "8675",
                    "pid": "9584",
                    "pnum": "1",
                    "uid": "0",
                    "pname": "76d64e504e16 S9",
                    "pprice": "5499.00",
                    "pimg": "//res.samsungeshop.com.cn/resources/2018/11/12/15420363051241879_293X293.jpg",
                    "pdesc": "1"
                },
                {
                    "id": "8678",
                    "pid": "9582",
                    "pnum": "2",
                    "uid": "0",
                    "pname": "METERSBONWE",
                    "pprice": "168.90",
                    "pimg": "http://pic.banggo.com/sources/images/goods/MB/249882/249882_00.jpg?x-oss-process=image/resize,m_fill,w_350/quality,Q_50",
                    "pdesc": "597357fa672c94887ec788e4"
                },
                {
                    "id": "8680",
                    "pid": "9603",
                    "pnum": "2",
                    "uid": "0",
                    "pname": "Metersbonwe",
                    "pprice": "159.90",
                    "pimg": "http://pic.banggo.com/sources/images/goods/MB/661132/661132_00.jpg?x-oss-process=image/resize,m_fill,w_300,h_410",
                    "pdesc": "301079cb5b6365b054c1301175376f6e6d41537082b177ed6b3e8fde5e3d5939514b"
                }
            ]
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
        // $.ajax({
        //     type:'get',
        //     url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
        //     data:{

        //     },
        //     dataType:'json',
        //     success:function(data){
        //         console.log(data.data);
                _this.setState({arr:_this.state.arr2})
        //     }
        // })

    }
}


export default Home
