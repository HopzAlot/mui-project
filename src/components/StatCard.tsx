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
        borderColor: "rgba(255,255,255,0.18)",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div>
        <Typography variant="h5" sx={{ color: "common.white" }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
          {label}
        </Typography>
      </div>
    </Paper>
  )
}

export default StatCard