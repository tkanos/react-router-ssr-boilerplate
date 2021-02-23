import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (arg, thunkAPI) => {
      const response = await thunkAPI.extra.api.get('/users')
      return response.data
    }
  )

export const userList = createSlice({
  name: 'users',
  initialState: {
    status: 'idle',
    value: [],
    error: '',
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUsers.fulfilled]: (state, action) => {
      // Add user to the state array
      state.status = 'succeeded'
      state.value = action.payload
    },
    [fetchUsers.pending]: (state) => {
        state.status = 'loading'
    },
    [fetchUsers.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    }
  },
});


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getUsers = state => state.users.value

export default userList.reducer;