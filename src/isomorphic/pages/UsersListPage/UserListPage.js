import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, getUsers } from "./userListReducer";

const UserListPage = () =>  {
    const dispatch = useDispatch();

    const users = useSelector(getUsers);

    const userStatus = useSelector(state => state.users.status)

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchUsers())
        }
      },[userStatus, dispatch])

      const renderUsers = () => {
        return users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    let content
    if (userStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (userStatus === 'succeeded') {
        // Sort posts in reverse chronological order by datetime string
        content = <ul>{renderUsers()}</ul>
    } else if (userStatus === 'failed') {
        content = <div>error</div>
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
        {content}
    </div>)
    
}

function initData(store) {
    return store.dispatch(fetchUsers())
}

export default {
    initData,
    component: UserListPage
}