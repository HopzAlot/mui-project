import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { CssBaseline, ThemeProvider } from "@mui/material"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import App from "./App"
import theme from "./theme"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
