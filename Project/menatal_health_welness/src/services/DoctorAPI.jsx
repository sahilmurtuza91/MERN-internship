import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const DoctorAPI = createApi({
  reducerPath: 'DoctorAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my.api.mockaroo.com/' }),
  endpoints: (builder) => ({
    getDoctorData: builder.query({
      query: (name) => "doctors.json?key=b4a40160",
    }),
  }),
})

export const { useGetDoctorDataQuery } = DoctorAPI