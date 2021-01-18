import React from 'react'
//import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import UserListPage, { initData } from './pages/UsersListPage/UserListPage.js'

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
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UserListPage,
        path: '/users',
    }
  ]