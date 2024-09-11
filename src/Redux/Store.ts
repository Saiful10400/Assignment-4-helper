import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feathcer/counterSlice";
import todoReducer from "./feathcer/todoSlice";
import { baseApi } from "./api/api";



const store=configureStore({
    reducer:{
        todoStore:todoReducer,
        [baseApi.reducerPath]:baseApi.reducer
    },

    middleware:(getDefaultMiddlewares)=> getDefaultMiddlewares().concat(baseApi.middleware)
   
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store