import { createSlice } from "@reduxjs/toolkit";

const cardSlicer = createSlice({
    name:"theme",
    initialState:{
        theme:true
    },
    reducers:{
        changeTheme:(state,action)=>{
            state.theme=action.payload
        }
    }
})

export const {changeTheme}=cardSlicer.actions;
export default cardSlicer.reducer