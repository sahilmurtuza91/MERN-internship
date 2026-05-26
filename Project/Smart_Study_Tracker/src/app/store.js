import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/taskSlice"
import settingReducer from "../redux/settingsSlice"

export const store = configureStore({
    reducer:{
        tasks:taskReducer,
        settings: settingReducer,
    },
});