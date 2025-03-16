import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slice"
const store=configureStore({
    reducer:{
        app:cardSlice
    }
})

export default store