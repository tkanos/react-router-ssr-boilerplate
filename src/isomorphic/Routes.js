import React from 'react'
//import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import UserList, { initData } from './components/UsersList/UserList.js'

/*
export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
        </div>
    )

}*/
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UserList,
        initData: initData,
    }
  ]