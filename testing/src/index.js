import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// by default node will import the index.js file
import reducers from 'reducers'

import App from 'components/App';

ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App />
    </Provider>
    , document.querySelector('#root')
);