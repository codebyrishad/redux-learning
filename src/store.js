import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counterSlice";

const store = configureStore({
    reducer:{
        Counter:counterReducer,
    },
})

export default store;