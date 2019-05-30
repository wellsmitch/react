import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router';
import './App.css';
const asstyle = {
  color:'red'
};
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>hello world</h1>
          <Link to='/home' activeStyle={asstyle}>首页</Link>
          {/* //home中的斜杠不加路径会变成/home/about */}
          <Link to='/about' activeStyle={asstyle}>关于</Link>
          <Link to='/other' activeStyle={asstyle}>其他</Link>
          <Link to='/query' activeStyle={asstyle}>query</Link>
          <Link to='/Demo11' activeStyle={asstyle}>Demo11</Link>
          <div>
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
