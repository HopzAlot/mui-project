import { Box, Container, Paper } from "@mui/material"
import FeatureCard from "../components/FeatureCard"
import SectionHeading from "../components/SectionHeading"

const features = [
  {
    icon: "⚡",
    title: "Fast structure",
    description:
      "Each visible part of the UI lives in a dedicated component so the app stays easy to read and extend.",
  },
  {
    icon: "📱",
    title: "Responsive by default",
    description:
      "The hero, cards, and navigation all collapse cleanly on smaller screens without extra layout hacks.",
  },
  {
    icon: "🎨",
    title: "Theme consistency",
    description:
      "A single MUI theme controls colors, type, spacing, and button styling across the whole page.",
  },
]

function FeaturesSection() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Core features"
          title="Reusable components that feel like a real project"
          description="Instead of writing the whole UI in App.tsx, the page is broken into smaller pieces that can be reused in a bigger product later."
        />

        <Box
          sx={{
            mt: 0.5,
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </Box>

        <Paper
          variant="outlined"
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 3.5 },
            borderColor: "rgba(31, 60, 136, 0.12)",
            background: "linear-gradient(135deg, rgba(31, 60, 136, 0.04), rgba(217, 119, 6, 0.05))",
          }}
        >
          A clean project structure makes it easier for your supervisor to review the work,
          and easier for you to extend it with pages, API calls, or dashboard widgets later.
        </Paper>
      </Container>
    </Box>
  )
}

export default FeaturesSection