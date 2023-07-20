import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

export const userLoginSlice = createSlice({
    name: 'userLoginSlice',
    initialState,
    reducers: {
        loggedIn: (state) => {
            state.value = true
        },
        LoggedOut: (state) => {
            state.value = false
        }
    },
})

export const { loggedIn, LoggedOut } = userLoginSlice.actions

export default userLoginSlice.reducer