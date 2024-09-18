import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})




export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}


// Create context
// Add values
// Make provider
// Make useContext(ThemeContext)