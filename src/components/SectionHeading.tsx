import { Stack, Typography } from "@mui/material"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Stack spacing={1.2} sx={{ maxWidth: 760 }}>
      <Typography variant="overline" sx={{ letterSpacing: 2, color: "secondary.main" }}>
        {eyebrow}
      </Typography>
      <Typography variant="h4">{title}</Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Stack>
  )
}

export default SectionHeading