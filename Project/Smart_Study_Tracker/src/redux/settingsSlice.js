import { createSlice } from "@reduxjs/toolkit";
import {
  saveSettingsToLocalStorage,
  loadSettingsFromLocalStorage,
} from "../localStorage/localStorage";
const initialState = loadSettingsFromLocalStorage() || {
  profile: {
    name: "Sahil Murtuza",
    scholar: "Active Scolar",
    avatar: "AccountCircleIcon ",
  },
  categories: [
    "Assignment",
    "Revision",
    "Exam",
    "Break",
    "Coding",
    "Self Study",
  ],
  alertTime: 1,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = action.payload;
      saveSettingsToLocalStorage(state);
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
      saveSettingsToLocalStorage(state);
    },

    updateAlertTime: (state, action) => {
      state.alertTime = action.payload;
      saveSettingsToLocalStorage(state);
    },
  },
});

export const { updateProfile, updateCategories, updateAlertTime } =
  settingsSlice.actions;

export default settingsSlice.reducer;
