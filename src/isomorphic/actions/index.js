import axios from 'axios'

export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async (dispatch, getState, context) => {
    const res = await context.api.get('/users')

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}