import { useState } from "react"

import {
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

type Props = {
  open: boolean
  onClose: () => void
}

function AuthDialog({ open, onClose }: Props) {
  const [isSignup, setIsSignup] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
      } else {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
      }

      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        {isSignup ? "Create Account" : "Login"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>

          <Button
            variant="outlined"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </Button>

          <Typography
            align="center"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              setIsSignup(!isSignup)
            }
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