import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi({
 reducerPath:"baseApi",
 baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/api/"}),
 tagTypes:["room"],
 endpoints:(builder)=>{
    return{
        Rooms:builder.query({
            query:(dist)=>{
                console.log(dist)
                return{
                    url:"rooms",
                    method:"GET"
                }
            },
            providesTags:["room"]
        }),
        createRoom:builder.mutation({
            query:(dist)=>{
                console.log(dist,"distData")
                return{
                    url:"rooms",
                    method:"POST",
                    body:dist
                }
            },
            invalidatesTags:["room"]
        }),
    }
 }
})



export const {useRoomsQuery,useCreateRoomMutation}=baseApi