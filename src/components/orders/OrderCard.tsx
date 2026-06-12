import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material"

import type { Order } from "../../types/order"

type Props = {
  order: Order
  onEdit: (order: Order) => void
  onDelete: (order: Order) => void
}

function OrderCard({ order, onEdit, onDelete }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "rgba(31, 60, 136, 0.12)",
        transition: "transform 160ms ease, box-shadow 160ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(19, 33, 60, 0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          <Stack spacing={0.5}>
            <Typography variant="h6">{order.meal}</Typography>
            <Typography variant="body2" color="text.secondary">
              Deliver to: {order.location}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "primary.main", fontWeight: 700 }}>
              PKR {order.price.toLocaleString()}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <IconButton size="small" onClick={() => onEdit(order)} title="Edit order">
              <EditOutlined fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(order)} title="Cancel order">
              <DeleteOutlineRounded fontSize="small" color="error" />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OrderCard