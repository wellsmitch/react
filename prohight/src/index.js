import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store'
import {Provider} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));

