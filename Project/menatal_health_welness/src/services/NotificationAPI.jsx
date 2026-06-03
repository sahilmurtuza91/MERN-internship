import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const NotificationAPI = createApi({
  reducerPath: 'NotificationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my.api.mockaroo.com/'}),
  endpoints: (builder) => ({
    getNotification: builder.query({
      query: (name) => "notification.json?key=b4a40160",
    }),
    
  }),
})


export const { useGetNotificationQuery } = NotificationAPI;


