import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PatientsAPI = createApi({
  reducerPath: "PatientsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://my.api.mockaroo.com/" }),
  endpoints: (builder) => ({
    getPatientsData: builder.query({
      query: (name) => "users.json?key=b4a40160",
    }),
  }),
});

export const { useGetPatientsDataQuery } = PatientsAPI;

// export const emptySplitApi=createApi()
// emptySplitApi.injectEndpoints({
//   endpoints:()=>{
//     getData:()=>{

//     }
//   }
// })
