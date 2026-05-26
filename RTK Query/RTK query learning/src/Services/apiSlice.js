import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        // for getting data that is GET we use builder.query
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: (Users) => Users.reverse(),
            providesTags: ["Users"],
        }),
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: "Users", id }],
        })

    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery} = api;