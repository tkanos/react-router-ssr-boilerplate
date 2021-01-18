import React from 'react'
import App from './App'
import HomePage from './pages/HomePage/HomePage'
import UserListPage, { initData } from './pages/UsersListPage/UserListPage.js'

export default [
    {
        ...App,
        routes: [
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
    }
]

