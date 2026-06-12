import { useEffect, useState } from "react"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material"

import { MEAL_OPTIONS, type Order, type OrderInput } from "../../types/order"

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (input: OrderInput) => Promise<void>
  initialOrder?: Order | null
}

const emptyState: OrderInput = {
  location: "",
  meal: "",
  price: 0,
}

function OrderFormDialog({ open, onClose, onSubmit, initialOrder }: Props) {
  const [form, setForm] = useState<OrderInput>(emptyState)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isEditing = Boolean(initialOrder)

  useEffect(() => {
    if (open) {
      setForm(
        initialOrder
          ? {
              location: initialOrder.location,
              meal: initialOrder.meal,
              price: initialOrder.price,
            }
          : emptyState
      )
      setError(null)
    }
  }, [open, initialOrder])

  const handleMealChange = (mealLabel: string) => {
    const matched = MEAL_OPTIONS.find((option) => option.label === mealLabel)

    setForm((prev) => ({
      ...prev,
      meal: mealLabel,
      price: matched ? matched.price : prev.price,
    }))
  }

  const handleSubmit = async () => {
    if (!form.location.trim() || !form.meal.trim() || form.price <= 0) {
      setError("Please fill in all fields with valid values.")
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await onSubmit(form)
      onClose()
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{isEditing ? "Edit Order" : "Place an Order"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            select
            label="Meal"
            fullWidth
            value={form.meal}
            onChange={(e) => handleMealChange(e.target.value)}
          >
            {MEAL_OPTIONS.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Delivery Location"
            fullWidth
            value={form.location}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, location: e.target.value }))
            }
          />

          <TextField
            label="Price (PKR)"
            type="number"
            fullWidth
            value={form.price}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }))
            }
          />

          {error && (
            <Stack sx={{ color: "error.main", fontSize: 14 }}>{error}</Stack>
          )}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} disabled={submitting}>
          {isEditing ? "Save Changes" : "Place Order"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default OrderFormDialog