import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { Brightness4, Brightness7Rounded } from "@mui/icons-material"
import { useTheme } from "../ThemeContext"

function AppShell() {
  const { mode, toggleTheme } = useTheme()
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: "blur(14px)",
        backgroundColor: mode === "dark" ? "#000000" : "#ffffffcc",
        borderBottom: mode === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(19, 33, 60, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                display: "grid",
                placeItems: "center",
                color: "common.white",
                background: "linear-gradient(135deg, #1f3c88 0%, #d97706 100%)",
                fontWeight: 700,
              }}
            >
              🍲
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                Ghar Ka Khana
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Ab milay ghar ka ziaqa har jagah.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1, alignItems: "center" }}>
            <Button
              color="inherit"
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#254fbb",
                  borderRadius: 1,
                },
              }}
            >
              Features
            </Button>
            <Button
              color="inherit"
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#254fbb",
                  borderRadius: 1,
                },
              }}
            >
              Workflow
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#254fbb",
                },
              }}
            >
              Contact
            </Button>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ ml: 1 }}
              title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {mode === "light" ? <Brightness4 /> : <Brightness7Rounded />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppShell