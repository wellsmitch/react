import React, {Component} from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './detail'
import Media from 'react-media';
import Other from './other'

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};
class About extends Component{
    constructor(props){
        super(props);
       // this.tap = this.tap.bind(this)
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
    // https://blog.csdn.net/baidu_38027860/article/details/82888974
    // 编程式路由跳转
    this.props.history.push({ pathname: "/other", state: {id: '456789'} });
    // this.props.history.push({pathname:'/other',query:{id:456789}})
}
    render(){
        return(
            <div>
                <div>关于</div>
                <button onClick={this.tap.bind(this)}>跳转到other</button>
                <div>
                    <Media query="(max-width: 599px)">
                        {matches =>
                            matches ? (
                                <p>The document is less than 600px wide.</p>
                            ) : (
                                <p>The document is at least 600px wide.</p>
                            )
                        }
                    </Media>
                </div>
                <hr/>
                <Router>
                <div>
                    <Link to={{pathname:'/other',query:{id:'ssssss'}}}> 跳转到other </Link>
                    <Route path='/other' component={Other}></Route>
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
