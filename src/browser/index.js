//Startup poit for client side application
import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from "../isomorphic/Routes"
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from '@reducers'
import { renderRoutes } from 'react-router-config'
import  axios from 'axios'

const apiAxios = axios.create({
    baseURL: '/api' // client call
})

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument({
    api: apiAxios
})))

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))