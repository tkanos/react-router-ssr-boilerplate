//Startup poit for client side application
import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from "../isomorphic/Routes"
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import thunk from 'redux-thunk'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import users from '@pages/UsersListPage/userListReducer.js'
import axios from 'axios'


const apiAxios = axios.create({
    baseURL: '/api' // client call
})


const reducer = combineReducers({
    users,
})

const store = configureStore({
  reducer: reducer,
  preloadedState: window.INITIAL_STATE,
  middleware: [thunk.withExtraArgument({ api: apiAxios }), ...getDefaultMiddleware()]
})

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))