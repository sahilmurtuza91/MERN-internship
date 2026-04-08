import {createSlice} from "@reduxjs/toolkit"
import { act } from "react";

const initialState = {
  expenses: [],
}
const  expenseSlice = createSlice( {
  name: "expenses",
  initialState,
  reducers: {
    addExpenses: (state, action) =>{
      const addNewExpense = {
        id: Date.now(),
        ...action.payload,
      }
      state.expenses.push(addNewExpense)
    }, 
    deleteExpenses: (state, action) =>{
      state.expenses = state.expenses.filter((exp)=> exp.id !== action.payload);
    },
    updateExpenses: (state, action)=>{
      const {id, updatedata} = action.payload;
      const index = state.expenses.findIndex((exp)=> exp.id === id)

      if(index !==-1){
        state.expenses[index] ={
          ...state.expenses[index], ...updatedata
        };
      };
    },
  },
});

export const {addExpenses, deleteExpenses, updateExpenses} = expenseSlice.actions;
export default expenseSlice.reducer;

