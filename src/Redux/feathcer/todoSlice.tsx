import { createSlice } from "@reduxjs/toolkit"

const InitialState=[]

const todoSlice=createSlice({
    name:"Todo",
    initialState:InitialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteTodo:(state,action)=>{
          
            return state.filter(item=>item.roll!==action.payload)
           
        },
        updateTodo:(state,action)=>{
            const data=state.find(item=>item.roll===action.payload.roll)
            data.name=action.payload.name

        },
    }
})

export const{addTodo,deleteTodo,updateTodo}=todoSlice.actions

const todoReducer=todoSlice.reducer
export default todoReducer