import { Paper, Typography } from "@mui/material"

type StatCardProps = {
  value: string
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        borderColor: "primary.light",
        background: "rgba(31, 60, 136, 0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </div>
    </Paper>
  )
}

export default StatCard