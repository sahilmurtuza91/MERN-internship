import { createContext, useContext } from "react";

// Create a context
export const ThemContext = createContext({
    themeMode:"light",  // default theme is light
    darkTheme: ()=>{},  // function to switch to dark theme (empty by default)
    lightTheme: () =>{}   // function to switch to light theme (empty by default)
})

// Create a shortcut for Provider
// Instead of writing ThemContext.Provider everywhere,
// we can just use ThemeProvider
export const ThemeProvider = ThemContext.Provider

// Custom hook to use theme easily
// Instead of writing useContext(ThemContext) again and again,
// we can just call useTheme()
export default function useTheme(){
    return useContext(ThemContext) // gives access to theme data (themeMode, functions)
}