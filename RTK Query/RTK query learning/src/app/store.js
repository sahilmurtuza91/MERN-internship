import { configureStore } from "@reduxjs/toolkit";

import {api} from "../Services/apiSlice"

export const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>[
        getDefaultMiddleware().concat(userApi.middleware),
    ]
});