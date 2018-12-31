import React, { Component } from 'react';
import { BrowserRouter as Router , Route ,Link ,Redirect,Switch} from 'react-router-dom';
//BrowserRouter  相当于<Router history = {history}> 故可直接通过history进行跳转
import Home from './components1/home'
import About from './components1/about'
import Other from './components1/other'
import './App.css';

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
              <Switch>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/about' component={About}></Route>
                  <Route path='/other' component={Other}></Route>
                  <Redirect to='/home' />
              </Switch>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;
