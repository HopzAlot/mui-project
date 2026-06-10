import { Box, Container, Step, StepLabel, Stepper, Typography } from "@mui/material"
import SectionHeading from "../components/SectionHeading"

const steps = ["Set a shared theme", "Split the page into sections", "Reuse cards and headings"]

function WorkflowSection() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gap: 3 }}>
          <SectionHeading
            eyebrow="How it is built"
            title="A simple flow that mirrors a professional React codebase"
            description="The point of the exercise is not just to make the page look good. It is to show structure, reusability, and responsiveness together."
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