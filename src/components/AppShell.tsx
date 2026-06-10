import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"

function AppShell() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: "blur(14px)",
        backgroundColor: "rgba(245, 247, 251, 0.8)",
        borderBottom: "1px solid rgba(19, 33, 60, 0.08)",
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
              M
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                MUI Starter
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Responsive React structure
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Button color="inherit" size="small">
              Features
            </Button>
            <Button color="inherit" size="small">
              Workflow
            </Button>
            <Button variant="contained" size="small">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppShell