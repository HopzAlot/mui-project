import { useCallback, useEffect, useState } from "react"

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore"

import { db } from "../../config/firebase"
import { useAuth } from "../../context/AuthContext"
import type { Order, OrderInput } from "../types/order"

const ORDERS_COLLECTION = "orders"

const getOrderTime = (order: Order) => order.createdAt?.toMillis() ?? 0

export function useOrders() {
  const { user } = useAuth()

  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      setOrders([])
      setLoading(false)
      return
    }

    setLoading(true)

    const ordersQuery = query(
      collection(db, ORDERS_COLLECTION),
      where("userID", "==", user.uid)
    )

    const unsubscribe = onSnapshot(
      ordersQuery,
      (snapshot) => {
        const data = snapshot.docs
          .map((docSnap) => ({
            id: docSnap.id,
            ...(docSnap.data() as Omit<Order, "id">),
          }))
          .sort((a, b) => {
            const newestFirst = getOrderTime(b) - getOrderTime(a)

            return newestFirst || a.meal.localeCompare(b.meal)
          })

        setOrders(data)
        setLoading(false)
        setError(null)
      },
      (err) => {
        console.error(err)
        setError("Failed to load orders.")
        setLoading(false)
      }
    )

    return unsubscribe
  }, [user])

  const createOrder = useCallback(
    async (input: OrderInput) => {
      if (!user) throw new Error("You must be logged in to place an order.")

      await addDoc(collection(db, ORDERS_COLLECTION), {
        location: input.location,
        meal: input.meal,
        price: input.price,
        userID: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    },
    [user]
  )

  const updateOrder = useCallback(
    async (id: string, input: OrderInput) => {
      if (!user) throw new Error("You must be logged in to update an order.")

      await updateDoc(doc(db, ORDERS_COLLECTION, id), {
        location: input.location,
        meal: input.meal,
        price: input.price,
        updatedAt: serverTimestamp(),
      })
    },
    [user]
  )

  const deleteOrder = useCallback(async (id: string) => {
    await deleteDoc(doc(db, ORDERS_COLLECTION, id))
  }, [])

  return {
    orders,
    loading,
    error,
    createOrder,
    updateOrder,
    deleteOrder,
  }
}
