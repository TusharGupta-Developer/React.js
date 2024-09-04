import { createContext, useContext } from "react";


export const ThemeContext = createContext({ // The ThemeContext(Context object) is created with default values, providing a way to manage the theme mode across the application.
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider; // The ThemeProvider will be used higher up in your component tree to wrap components that need access to the theme-related state and functions.


export default function useTheme() { // Custom hook: This is a custom hook that simplifies accessing the ThemeContext. Instead of calling useContext(ThemeContext) directly in every component, you can just call useTheme() to get the current context value.s
    return useContext(ThemeContext)
}