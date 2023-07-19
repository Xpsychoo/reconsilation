import { configureStore } from '@reduxjs/toolkit'
import sideViewSlice from './sideViewSlice'

export const store = configureStore({
    reducer: {
        sideView: sideViewSlice
    },
    
})