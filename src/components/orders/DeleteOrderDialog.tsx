import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material"

import type { Order } from "../../types/order"

type Props = {
  order: Order | null
  onClose: () => void
  onConfirm: (order: Order) => Promise<void>
}

function DeleteOrderDialog({ order, onClose, onConfirm }: Props) {
  const handleConfirm = async () => {
    if (!order) return
    await onConfirm(order)
    onClose()
  }

  return (
    <Dialog open={Boolean(order)} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Cancel Order</DialogTitle>

      <DialogContent>
        <Typography color="text.secondary">
          Are you sure you want to cancel your order of{" "}
          <strong>{order?.meal}</strong>? This action cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit">
          Keep Order
        </Button>
        <Button variant="contained" color="error" onClick={handleConfirm}>
          Cancel Order
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteOrderDialog