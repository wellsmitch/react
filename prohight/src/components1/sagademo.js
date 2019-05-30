import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
const App = props =>
    (<div className="App">
        <input type="text" onChange={props.handleChange} value={props.value} />
        <ul>
            {props.list.map(i =>
                <li>{i.name} </li>
            )}
        </ul>
    </div>);

const mapStateToProps = state => ({
    value: state.value,
    list: state.list
});

const mapActionToProps = dispatch => ({
    handleChange: v => dispatch({
        type: 'INPUT',
        payload: v.target.value
    })
});

// export default App
export default connect(mapStateToProps, mapActionToProps)(App);
