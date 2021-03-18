import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App/App';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './Redux/Reducer/Reducers'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

const state = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render( 
    <React.StrictMode >
    <Provider store={state}>
        <App / >
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
