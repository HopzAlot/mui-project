import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import App from "./App"
import { ThemeProvider, useTheme } from "./ThemeContext"
import { getTheme } from "./theme"
import "./index.css"

function AppWithTheme() {
  const { mode } = useTheme()
  const theme = getTheme(mode)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  </StrictMode>,
)
