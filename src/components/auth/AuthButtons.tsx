import { useState } from "react"

import {
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material"

import AuthDialog from "./AuthDialog"
import { useAuth } from "../../../context/AuthContext"

function AuthButtons() {
  const { user, logout } = useAuth()

  const [openDialog, setOpenDialog] =
    useState(false)

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null)

  if (!user) {
    return (
      <>
        <Button
          variant="contained"
          onClick={() =>
            setOpenDialog(true)
          }
        >
          Login
        </Button>

        <AuthDialog
          open={openDialog}
          onClose={() =>
            setOpenDialog(false)
          }
        />
      </>
    )
  }

  return (
    <>
      <Avatar
        src={user.photoURL || ""}
        onClick={(e) =>
          setAnchorEl(e.currentTarget)
        }
        sx={{
          width: 38,
          height: 38,
          cursor: "pointer",
        }}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() =>
          setAnchorEl(null)
        }
      >
        <MenuItem disabled>
          {user.email}
        </MenuItem>

        <MenuItem
          onClick={() => {
            logout()
            setAnchorEl(null)
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}

export default AuthButtons