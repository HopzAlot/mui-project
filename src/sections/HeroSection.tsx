import { Box, Button, Container, Stack, Typography } from "@mui/material"
import StatCard from "../components/StatCard"

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 7, md: 10 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(31, 60, 136, 0.12), transparent 34%), radial-gradient(circle at top right, rgba(217, 119, 6, 0.14), transparent 30%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={4}>
          <Box sx={{ maxWidth: 820 }}>
            <Typography variant="overline" sx={{ color: "secondary.main", letterSpacing: 2 }}>
              Internship submission
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: 1.2,
                fontSize: { xs: "2.6rem", sm: "3.5rem", md: "4.6rem" },
                lineHeight: 1.02,
              }}
            >
              Clean MUI UI that stays responsive without stuffing everything into one file.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 700,
                fontSize: { xs: "1rem", md: "1.08rem" },
                color: "text.secondary",
              }}
            >
              This starter shows a practical React folder structure, reusable section
              components, and a polished layout that works from mobile to desktop.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" size="large">
                View structure
              </Button>
              <Button variant="outlined" size="large">
                Inspect sections
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            }}
          >
            <StatCard value="5" label="Reusable sections" />
            <StatCard value="100%" label="Responsive layout" />
            <StatCard value="MUI" label="Theme-driven design" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection