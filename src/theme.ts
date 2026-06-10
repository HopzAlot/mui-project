import { createTheme } from "@mui/material/styles"

export function getTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#1f3c88",
        dark: "#152c66",
        light: "#5c7bd9",
      },
      secondary: {
        main: "#d97706",
        dark: "#b45309",
        light: "#f59e0b",
      },
      background: {
        default: mode === "light" ? "#f5f7fb" : "#0f1419",
        paper: mode === "light" ? "#ffffff" : "#1a1f29",
      },
      text: {
        primary: mode === "light" ? "#13213c" : "#f5f7fb",
        secondary: mode === "light" ? "#5b657a" : "#b8bcc7",
      },
    },
    shape: {
      borderRadius: 18,
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: "-0.04em",
      },
      h2: {
        fontWeight: 700,
        letterSpacing: "-0.03em",
      },
      h3: {
        fontWeight: 700,
        letterSpacing: "-0.03em",
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 999,
            paddingInline: 22,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  })
}

const lightTheme = getTheme("light")
export default lightTheme