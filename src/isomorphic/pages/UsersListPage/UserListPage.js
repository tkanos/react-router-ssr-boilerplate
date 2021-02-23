import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from "react-redux";
import { clear, getUsers, fetchAsync } from "./userListReducer";

const UserListPage = () =>  {
    const dispatch = useDispatch();

    const users = useSelector(getUsers);

    useEffect(() => {
            dispatch(fetchAsync())
      },[dispatch])

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
        {renderUsers()}
        <button onClick={() =>
            dispatch(fetchAsync())
          }>Refresh</button>
          <button onClick={() =>
            dispatch(clear())
          }>clear</button>
    </div>)
    
}

function initData(store) {
    return store.dispatch(fetchAsync())
}

export default {
    initData,
    component: UserListPage
}