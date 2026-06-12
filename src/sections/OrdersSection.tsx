import { useState } from "react"

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { AddRounded } from "@mui/icons-material"

import SectionHeading from "../components/SectionHeading"
import OrderCard from "../components/orders/OrderCard"
import OrderFormDialog from "../components/orders/OrderFormDialog"
import DeleteOrderDialog from "../components/orders/DeleteOrderDialog"
import { useAuth } from "../../context/AuthContext"
import { useOrders } from "../hooks/useOrders"
import type { Order, OrderInput } from "../types/order"

function OrdersSection() {
  const { user, loading: authLoading } = useAuth()
  const { orders, loading, createOrder, updateOrder, deleteOrder } = useOrders()

  const [formOpen, setFormOpen] = useState(false)
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)
  const [deletingOrder, setDeletingOrder] = useState<Order | null>(null)

  const handleOpenCreate = () => {
    setEditingOrder(null)
    setFormOpen(true)
  }

  const handleOpenEdit = (order: Order) => {
    setEditingOrder(order)
    setFormOpen(true)
  }

  const handleSubmit = async (input: OrderInput) => {
    if (editingOrder) {
      await updateOrder(editingOrder.id, input)
    } else {
      await createOrder(input)
    }
  }

  return (
    <Box id="orders" sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <SectionHeading
            eyebrow="Your Orders"
            title="Order Your Favourite Home-Cooked Meal"
            description="Place, track, and manage your meal orders — all in one place."
          />

          {user && (
            <Button
              variant="contained"
              startIcon={<AddRounded />}
              onClick={handleOpenCreate}
              sx={{ flexShrink: 0 }}
            >
              New Order
            </Button>
          )}
        </Stack>

        <Box sx={{ mt: 3 }}>
          {authLoading ? (
            <Stack sx={{ alignItems: "center", py: 6 }}>
              <CircularProgress />
            </Stack>
          ) : !user ? (
            <Paper
              variant="outlined"
              sx={{
                p: { xs: 3, md: 5 },
                textAlign: "center",
                borderColor: "rgba(31, 60, 136, 0.12)",
                background:
                  "linear-gradient(135deg, rgba(31, 60, 136, 0.04), rgba(217, 119, 6, 0.05))",
              }}
            >
              <Typography variant="h6">Login to place an order</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Create an account or sign in to order delicious home-cooked meals
                and manage your orders.
              </Typography>
            </Paper>
          ) : loading ? (
            <Stack sx={{ alignItems: "center", py: 6 }}>
              <CircularProgress />
            </Stack>
          ) : orders.length === 0 ? (
            <Paper
              variant="outlined"
              sx={{
                p: { xs: 3, md: 5 },
                textAlign: "center",
                borderColor: "rgba(31, 60, 136, 0.12)",
              }}
            >
              <Typography variant="h6">No orders yet</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Hungry? Place your first order to enjoy fresh, homemade food.
              </Typography>
            </Paper>
          ) : (
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onEdit={handleOpenEdit}
                  onDelete={setDeletingOrder}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>

      <OrderFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleSubmit}
        initialOrder={editingOrder}
      />

      <DeleteOrderDialog
        order={deletingOrder}
        onClose={() => setDeletingOrder(null)}
        onConfirm={(order) => deleteOrder(order.id)}
      />
    </Box>
  )
}

export default OrdersSection