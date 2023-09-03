
import { createSlice, configureStore } from "@reduxjs/toolkit";




const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementby5(state, action) {
            state.counter += action.payload
        },
        decrementby5(state, action) {
            state.counter -= action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }


})


const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logOut(state) {
            state.isAuthenticated = false
        }
    },

})

const store = configureStore({
    reducer: { counterSlice: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions
export default store;
