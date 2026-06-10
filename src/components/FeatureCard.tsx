import { Card, CardContent, Stack, Typography } from "@mui/material"

type FeatureCardProps = {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderColor: "rgba(31, 60, 136, 0.12)",
        transition: "transform 160ms ease, box-shadow 160ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(19, 33, 60, 0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Typography variant="h5" sx={{ fontSize: 28 }}>
            {icon}
          </Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default FeatureCard