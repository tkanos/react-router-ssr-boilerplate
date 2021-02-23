import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '@actions'
import { Helmet } from 'react-helmet'

const UserListPage = () =>  {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers())
      },[])

    const renderUsers = () => {
        return users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    const head = () => {
        return (
        <Helmet>
            <title>{`${users.length} Users Loaded`}</title>
            <meta property="og.title" content="Users List" />  
        </Helmet>
        )
    }
   
    return (
    <div>
        {head()}
        User List:
        <ul>{renderUsers()}</ul>
    </div>)
    
}

function initData(store) {
    return store.dispatch(fetchUsers())
}

export default {
    initData,
    component: UserListPage
}