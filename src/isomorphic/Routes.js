import App from './App'
import HomePage from '@pages/HomePage/HomePage'
import UserListPage from '@pages/UsersListPage/UserListPage.js'
import NotFoundPage from '@pages/NotFoundPage'

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
            },
            {
                ...NotFoundPage
            }
        ]
    }
]

