import { Box, Button, Container, Stack, Typography } from "@mui/material"
import StatCard from "../components/StatCard"

type Props = {
  onOrderNow: () => void
}

function HeroSection({ onOrderNow }: Props) {
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
              Authentic Home-Cooked Food
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: 1.2,
                fontSize: { xs: "2.6rem", sm: "3.5rem", md: "4.6rem" },
                lineHeight: 1.02,
              }}
            >
              Ghar Ka Khana - Taste of Home, Delivered to Your Door
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 700,
                fontSize: { xs: "1rem", md: "1.08rem" },
                color: "text.secondary",
              }}
            >
              Experience authentic home-cooked meals prepared with love by local home cooks.
              Fresh ingredients, traditional recipes, and the warmth of homemade food delivered
              right to your table.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" size="large" onClick={onOrderNow}>
                Order Now
              </Button>
              <Button variant="outlined" size="large" href="#orders">
                Browse Meals
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
            <StatCard value="500+" label="Home Cooks" />
            <StatCard value="2000+" label="Meals Delivered" />
            <StatCard value="4.9★" label="Customer Rating" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection
