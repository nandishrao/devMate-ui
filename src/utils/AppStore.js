import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReduceer from "./Connectionslice"
import { configureStore } from "@reduxjs/toolkit"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connections : connectionReduceer,
    }
})
export default appStore