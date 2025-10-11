import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReduceer from "./Connectionslice"
import requestReducer from "./requestsSlice"
import { configureStore } from "@reduxjs/toolkit"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connections : connectionReduceer,
        requests : requestReducer,
    }
})
export default appStore