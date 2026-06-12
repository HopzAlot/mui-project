import { useState } from "react"

import {
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material"

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

import { auth, googleProvider } from "../../../config/firebase"
import { getAuthErrorMessage } from "../../utils/authErrors"

type Props = {
  open: boolean
  onClose: () => void
}

function AuthDialog({ open, onClose }: Props) {
  const [isSignup, setIsSignup] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const resetState = () => {
    setEmail("")
    setPassword("")
    setError(null)
    setSubmitting(false)
  }

  const handleClose = () => {
    resetState()
    onClose()
  }

  const handleSubmit = async () => {
    setError(null)

    const trimmedEmail = email.trim()

    if (!trimmedEmail || !password) {
      setError("Please enter both email and password.")
      return
    }

    if (isSignup && password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    setSubmitting(true)

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, trimmedEmail, password)
      } else {
        await signInWithEmailAndPassword(auth, trimmedEmail, password)
      }

      resetState()
      onClose()
    } catch (err) {
      console.error(err)
      setError(getAuthErrorMessage(err))
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError(null)
    setSubmitting(true)

    try {
      await signInWithPopup(auth, googleProvider)
      resetState()
      onClose()
    } catch (err) {
      console.error(err)
      setError(getAuthErrorMessage(err))
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggleMode = () => {
    setIsSignup(!isSignup)
    setError(null)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        {isSignup ? "Create Account" : "Login"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitting}
            helperText={
              isSignup ? "Use at least 6 characters." : undefined
            }
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>

          <Button
            variant="outlined"
            onClick={handleGoogleLogin}
            disabled={submitting}
          >
            Continue with Google
          </Button>

          <Typography
            align="center"
            sx={{ cursor: "pointer" }}
            onClick={handleToggleMode}
          >
            {isSignup
              ? "Already have an account?"
              : "Create an account"}
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog