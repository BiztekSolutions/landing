import { createContext, useContext, useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"
import { darkTheme, lightTheme } from "../styles/theme"

const ThemeToggleContext = createContext({ isDark: false, toggleTheme: () => {} })

export function useThemeToggle() {
  return useContext(ThemeToggleContext)
}

export function ThemeToggleProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("biztek-theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    } catch {}
    return false
  })

  useEffect(() => {
    try {
      localStorage.setItem("biztek-theme", isDark ? "dark" : "light")
    } catch {}
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
      return next
    })
  }

  return (
    <ThemeToggleContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
