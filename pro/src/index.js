import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import App from './App';
import * as serviceWorker from './serviceWorker';

import {Router,Route,hasHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router'
import Home from './components/home'
import About from './components/about'
import Other from './components/other'
import Detail from './components/detail'
import Todocontroller from './flux/todocontroller'
import Demo11 from './redux/View'
import query from './components/query'


const tap = function(){
    console.log('进入其他页面')
};
const tap1= function(){
    console.log('离开其他页面')
};

ReactDOM.render(

    <Router history={hasHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Redirect from='/home' to='/other'/>
            {/*点击home 跳转到 other*/}
            {/*<IndexRedirect to='/about'/>*/}
            {/*IndexRedirect 首屏数据的展示*/}
            <Route path='/home' component={Home}>
                <Route path='/detail/:id' component={Detail}></Route>;
            </Route>;
            <Route path='/TodoController' component={Todocontroller}></Route>;
            <Route path='/Demo11' component={Demo11}></Route>;
            <Route path='/About' component={About}></Route>;
            <Route path='/other' onEnter={tap.bind(this)} onLeave={tap1.bind(this)}  component={Other}></Route>;
            <Route path='/query' component={query}>
                <Route path='/detail' component={Detail}></Route>;
            </Route>;

        </Route>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
