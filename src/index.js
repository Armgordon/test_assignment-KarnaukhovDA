import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux add
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./store/reducers/rootReducer";

// Saga
import createSagaMiddleware from 'redux-saga'

//Antd add
import 'antd/dist/antd.min.css';
import {sagaWatcher} from "./store/saga/sagas";

import './index.css';
import App from './App';


const saga = createSagaMiddleware()

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            saga
        )
    )
)

saga.run(sagaWatcher)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

root.render(app)

