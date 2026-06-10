import { Box, Container, Paper } from "@mui/material"
import FeatureCard from "../components/FeatureCard"
import SectionHeading from "../components/SectionHeading"

const features = [
  {
    icon: "👩‍🍳",
    title: "Authentic Recipes",
    description:
      "Meals prepared by local home cooks using traditional recipes passed down through generations, ensuring genuine homemade taste.",
  },
  {
    icon: "⚡",
    title: "Fresh & Fast Delivery",
    description:
      "Meals cooked fresh to order and delivered hot within 30 minutes. No frozen, no preservatives, just pure homemade goodness.",
  },
  {
    icon: "💚",
    title: "Support Local",
    description:
      "Every order directly supports local home cooks and their families, building a community of quality food producers.",
  },
]

function FeaturesSection() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Authentic Homemade Meals, Delivered Daily"
          description="We connect you with passionate home cooks who prepare fresh, traditional meals using family recipes and quality ingredients."
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
          Every meal tells a story. From a grandmother's secret recipe to a young mother's special curry,
          Ghar Ka Khana brings the warmth and authenticity of home-cooked food to your family.
        </Paper>
      </Container>
    </Box>
  )
}

export default FeaturesSection