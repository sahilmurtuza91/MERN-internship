import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => `users`,
      providesTags:["Users"],

      // cache for 60 seconds after component unmount
      keepUnusedDataFor: 60,
    }),
    getUserDataById: builder.query({
        query: (id) => `users/${id}`,
        providesTags:(result, error, id) =>[
            {type:"Users", id},
        ],
        keepUnusedDataFor:60,
    }),
  }),
});

export const { useGetUserDataQuery, useGetUserDataByIdQuery,useLazyGetUserDataQuery } = usersApi