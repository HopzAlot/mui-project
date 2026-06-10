import { Box, Button, Container, Paper, Typography } from "@mui/material"

function ContactSection() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            color: "common.white",
            background: "linear-gradient(135deg, #13213c 0%, #1f3c88 56%, #d97706 160%)",
          }}
        >
          <Box sx={{ display: "grid", gap: 2, justifyItems: "start" }}>
            <Typography variant="h4">Ready to submit a polished internship task?</Typography>
            <Typography sx={{ maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>
              This structure is easy to explain in a review: theme setup in one file, reusable UI
              components in one folder, and page sections kept separate from the app entry point.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Keep extending it
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ContactSection