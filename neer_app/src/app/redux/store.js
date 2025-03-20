import { configureStore } from "@reduxjs/toolkit"
import userdata from "./slice"
import todoReducer from "./todoslice"
export const store = configureStore ({
    reducer:{
        userdata:userdata,
        tododata:todoReducer
    }
})