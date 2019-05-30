import React, { Component } from 'react';
import { BrowserRouter as Router , Route ,Link ,Redirect,Switch} from 'react-router-dom';
//BrowserRouter  相当于<Router history = {history}> 故可直接通过history进行跳转
import Home from './components1/home'
import About from './components1/about'
import Other from './components1/other'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>高版路由</h1>
        <Router>
          {/*Router只能有一个根节点*/}
          <div>
              {/*高版不提供activestyle*/}
              {/*参数传递  this.props.params.match.id*/}
              <Link to='/home'>首页</Link>
              <Link to='/about'>关于</Link>
              <Link to='/other'>其他</Link>
              {/*Switch 用于解决Redirect产生的红色警告*/}
              <Switch>
                  <Route path='/home' component={Home}>

                  </Route>
                  <Route path='/about' component={About}></Route>
                  <Route path='/other' component={Other}></Route>
                  {/*<Route path='/' component={Home}></Route>*/}
                  {/*输入的路径不存在时候会重定向到about的页面中*/}
                  <Redirect to='/about' />
              </Switch>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;
