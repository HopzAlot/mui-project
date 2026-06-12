import type { Timestamp } from "firebase/firestore"

export type Order = {
  id: string
  location: string
  meal: string
  price: number
  userID: string
  createdAt?: Timestamp | null
  updatedAt?: Timestamp | null
}

export type OrderInput = {
  location: string
  meal: string
  price: number
}

export const MEAL_OPTIONS = [
  { label: "Biryani", price: 1200 },
  { label: "Karahi", price: 1800 },
  { label: "Nihari", price: 1000 },
  { label: "Haleem", price: 700 },
  { label: "Pulao", price: 900 },
  { label: "Daal Chawal", price: 500 },
] as const
