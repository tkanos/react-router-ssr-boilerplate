import thunk from 'redux-thunk'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import users from '@pages/UsersListPage/userListReducer.js'
import axios from 'axios'

export default (req) => {

    const apiAxios = axios.create({
        baseURL: process.env.API_URL, // server call
        headers: { cookie: req.get('cookie') || '' }
    })

    const reducer = combineReducers({
        users,
    })
    
    const store = configureStore({
     reducer: reducer,
     middleware:  [thunk.withExtraArgument({api: apiAxios}), ...getDefaultMiddleware()]
    })

    return store
}