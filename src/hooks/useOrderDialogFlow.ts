import { useCallback, useState } from "react"

import { useAuth } from "../../context/AuthContext"

export function useOrderDialogFlow() {
  const { user } = useAuth()
  const [orderDialogOpen, setOrderDialogOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [openOrderAfterAuth, setOpenOrderAfterAuth] = useState(false)

  const scrollToOrders = useCallback(() => {
    document.getElementById("orders")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [])

  const openOrderDialog = useCallback(() => {
    setOrderDialogOpen(true)
  }, [])

  const closeOrderDialog = useCallback(() => {
    setOrderDialogOpen(false)
  }, [])

  const handleOrderNow = useCallback(() => {
    scrollToOrders()

    if (!user) {
      setOpenOrderAfterAuth(true)
      setAuthDialogOpen(true)
      return
    }

    setOrderDialogOpen(true)
  }, [scrollToOrders, user])

  const handleAuthenticated = useCallback(() => {
    if (openOrderAfterAuth) {
      setOrderDialogOpen(true)
      setOpenOrderAfterAuth(false)
    }
  }, [openOrderAfterAuth])

  const closeAuthDialog = useCallback(() => {
    setAuthDialogOpen(false)
    setOpenOrderAfterAuth(false)
  }, [])

  return {
    orderDialogOpen,
    authDialogOpen,
    openOrderDialog,
    closeOrderDialog,
    closeAuthDialog,
    handleOrderNow,
    handleAuthenticated,
  }
}
