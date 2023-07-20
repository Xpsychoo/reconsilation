import { configureStore } from '@reduxjs/toolkit'
import sideViewSlice from './sideViewSlice'
import userLoginSlice from './userLoginSlice'

export const store = configureStore({
    reducer: {
        sideView: sideViewSlice,
        isLoggedIn: userLoginSlice
    },
    
})