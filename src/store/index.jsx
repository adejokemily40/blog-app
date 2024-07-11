import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "signup",
    initialState: {isLoggedIn: true}, 
    reducers: {
        signup(state) {
            state.isLoggedIn =true
        },
        signin(state) {
            state.isLoggedIn =true
        },
    },
});

export const authActions = authSlice.actions


export const store = configureStore({
    reducer: authSlice.reducer
})
