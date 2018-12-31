import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router';
//antd
import {
    Layout, Menu, Breadcrumb, Icon,Carousel
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }

    tap1(){
        var c = this.refs.ccc;
        c.next()
    }

    render(){
        return(
            <div>

                {/*************antd*****************/}
                <Carousel ref='ccc'>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <button onClick={this.tap1.bind(this)}>下一页</button>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>

                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                background: '#fff', padding: 24, margin: 0, minHeight: 280,
                            }}
                            >
                                {/**************/}
                                <h2>首页</h2>
                                <hr/>
                                <div>
                                    {
                                        this.state.arr.map((item,i)=>{
                                            return(
                                                <div key={i}>
                                                    <Link to={'/detail/'+item.pid}> {item.pname} </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr/>
                                <div>{this.props.children}</div>
                                {/**************/}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
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
