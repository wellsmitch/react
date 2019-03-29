import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './detail'

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr:[],
            arr2:[
                {
                    "id": "9084",
                    "pid": "9584",
                    "pnum": "1",
                    "uid": "0",
                    "pname": "76d64e504e16 S9",
                    "pprice": "5499.00",
                    "pimg": "//res.samsungeshop.com.cn/resources/2018/11/12/15420363051241879_293X293.jpg",
                    "pdesc": "1"
                },
                {
                    "id": "9083",
                    "pid": "9582",
                    "pnum": "2",
                    "uid": "0",
                    "pname": "METERSBONWE",
                    "pprice": "168.90",
                    "pimg": "http://pic.banggo.com/sources/images/goods/MB/249882/249882_00.jpg?x-oss-process=image/resize,m_fill,w_350/quality,Q_50",
                    "pdesc": "597357fa672c94887ec788e4"
                },
                {
                    "id": "9109",
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
tap(){
    // 编程式路由跳转
    this.props.history.push('/other')
}
    render(){
        return(
            <div>
                <div>关于</div>
                <button onClick={this.tap.bind(this)}>跳转到other</button>

                <hr/>
                <Router>
                <div>
                    {
                        this.state.arr2.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <Link to={{pathname:'/detail',query:{id:item.id}}}> {item.pname} </Link>
                                </div>
                            )
                        })
                    }
                    <hr/>
                    <Route path='/detail' component={Detail}></Route>
                </div>
                </Router>
            </div>

        )
    }
}


export default About
