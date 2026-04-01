
// Import configureStore from Redux Toolkit
// This function is used to create the Redux store (global state container)

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' // Import the reducer from the todo slice here we can alos use use another name instard of todoReducer

// Create and export the Redux store
// It combines all slices (features) into one global state
export const store = configureStore({
    reducer: {
        todo: todoReducer, // Set the reducer for the store (this will manage the state related to todos)
    }
});

/*
Iska matlab actual state aisa hoga:
store.getState() -> return : --
{
    state = {
        todo: {
        todoList: [ { id, text}]   // 👈 slice data (todo)
    }
}}
*/