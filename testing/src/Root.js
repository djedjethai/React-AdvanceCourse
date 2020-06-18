import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// we destructure the props as we want initialState to get a default value
// we need this initialState to test CommentList, but not in other component's test (so the default value solves the problem)
const reduxConnect = ({ children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(reduxPromise)
    );
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default reduxConnect;
