import { createSlice } from '@reduxjs/toolkit'

export const authReducer = createSlice({
    name: 'auth_token',
    initialState: {
        token: null,
    },
    reducers: {
        set_token: (state, action) => {
            return { ...state, token: action.payload }
        },
    },
})

// Action creators are generated for each case reducer function
export const { set_token } = authReducer.actions

export default authReducer.reducer