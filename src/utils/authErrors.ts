import { FirebaseError } from "firebase/app"

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-email":
        return "That email address doesn't look right. Please check and try again."

      case "auth/missing-password":
        return "Please enter your password."

      case "auth/weak-password":
        return "Password is too weak. Use at least 6 characters."

      case "auth/user-not-found":
        return "No account found with this email. Try signing up instead."

      case "auth/wrong-password":
        return "Incorrect password. Please try again."

      // Newer Firebase versions return this generic code for both
      // wrong password and unknown email to avoid user enumeration.
      case "auth/invalid-credential":
        return "Incorrect email or password. Please check your details and try again."

      case "auth/invalid-login-credentials":
        return "Incorrect email or password. Please check your details and try again."

      case "auth/email-already-in-use":
        return "An account already exists with this email. Try logging in instead."

      case "auth/too-many-requests":
        return "Too many failed attempts. Please wait a moment and try again."

      case "auth/user-disabled":
        return "This account has been disabled. Please contact support."

      case "auth/network-request-failed":
        return "Network error. Please check your connection and try again."

      case "auth/popup-closed-by-user":
        return "Sign-in popup was closed before completing. Please try again."

      case "auth/cancelled-popup-request":
        return "Sign-in was cancelled. Please try again."

      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email using a different sign-in method."

      default:
        return "Something went wrong. Please try again."
    }
  }

  return "Something went wrong. Please try again."
}