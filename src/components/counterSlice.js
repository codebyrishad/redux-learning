import { createSlice } from "@reduxjs/toolkit";


 const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        plus(state,action){
            state.count +=1;
        },
        minus(state,action){
            state.count -=1;
        },
        reset(state,action){
            state.count = 0;
        },
    },
})

 export const {plus,minus,reset}=counterSlice.actions ;
 export default counterSlice.reducer;