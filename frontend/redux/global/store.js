import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'

const store = configureStore({
    reducer: {
        authToken: authReducer,
    },
})


export default store;