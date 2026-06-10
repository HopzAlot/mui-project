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
            <Typography variant="h4">Ready to Experience Authentic Home Cooking?</Typography>
            <Typography sx={{ maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>
              Join thousands of satisfied customers enjoying delicious, fresh, home-cooked meals.
              Order today and taste the difference that comes from food made with love.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Download Our App
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ContactSection