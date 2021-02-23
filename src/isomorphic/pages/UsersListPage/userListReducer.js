import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const userList = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    fetch: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    }, clear: (state) => {
      state.value = []
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
  },
});

export const { fetch, clear } = userList.actions;


export const fetchAsync = () => async (dispatch, getState, context) => {
    const response = await context.api.get('/users')
    dispatch(fetch(response.data))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getUsers = state => state.users.value;

export default userList.reducer;