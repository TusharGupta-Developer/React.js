import { useEffect, useState } from "react"
import "./App.css"
import { ThemeProvider } from "./contexts/UserContext"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme

  //This code snippet uses the useEffect hook in React to dynamically apply a CSS class to the <html> element of the document based on the current theme mode.
  useEffect(() => {

    document.querySelector('html').classList.remove("light", "dark");// This line removes the "light" and "dark" classes from the <html> element.

    document.querySelector('html').classList.add(themeMode) // After removing the old theme classes, this line adds the current theme mode (stored in themeMode) as a class to the <html> element.

  }, [themeMode]) //the effect runs whenever themeMode changes. This ensures that the class on the <html> element is updated whenever the theme mode is toggled.


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App

// Remeber to change config in tailwind

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode : "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

