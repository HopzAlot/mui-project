import { Box, Container, Step, StepLabel, Stepper, Typography } from "@mui/material"
import SectionHeading from "../components/SectionHeading"

const steps = ["Browse & Select Your Meal", "Place Your Order", "Enjoy Fresh Homemade Food"]

function WorkflowSection() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gap: 3 }}>
          <SectionHeading
            eyebrow="How It Works"
            title="Ordering Fresh Homemade Meals Made Simple"
            description="Three easy steps to get authentic, home-cooked meals delivered to your doorstep every time."
          />

          <Stepper alternativeLabel activeStep={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ display: { xs: "grid", md: "none" }, gap: 2 }}>
            {steps.map((step, index) => (
              <Box
                key={step}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid rgba(19, 33, 60, 0.08)",
                  backgroundColor: "background.paper",
                }}
              >
                <Typography variant="overline" color="secondary.main">
                  Step {index + 1}
                </Typography>
                <Typography variant="h6">{step}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default WorkflowSection