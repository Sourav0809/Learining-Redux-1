import { createStore } from "redux";

const countReducer = (state = { counter: 0 }, action) => {
    if (action.type == 'increment') {
        return { counter: state.counter + 1 }

    }
    else if (action.type == 'decrement') {
        if (state.counter > 0) {

            return { counter: state.counter - 1 }
        }
        else {
            return state
        }

    }
    if (action.type == 'increment2') {
        return { counter: state.counter + 2 }

    }
    else if (action.type == 'decrement2') {
        if (state.counter > 0) {

            return { counter: state.counter - 2 }
        }
        else {
            return state
        }

    }
    else return state;
}

const store = createStore(countReducer)

export default store;