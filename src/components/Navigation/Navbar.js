"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  alpha,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"

const navLinks = [
  { path: "/", label: "Landing" },
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/algo", label: "Algos" },
]

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(5, 10, 48, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              background: "linear-gradient(90deg, #FFFFFF, #f15550)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            PageSwap
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    width: "70%",
                    maxWidth: 300,
                    background: "rgba(5, 10, 48, 0.95)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                  <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.path} disablePadding>
                      <ListItemButton
                        component={Link}
                        href={link.path}
                        onClick={handleDrawerToggle}
                        sx={{
                          py: 1.5,
                          "&:hover": {
                            bgcolor: "rgba(241, 85, 80, 0.1)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={link.label}
                          primaryTypographyProps={{
                            sx: {
                              color: "white",
                              fontWeight: link.path === "/" ? 700 : 400,
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                marginLeft: "auto",
                gap: 1,
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  href={link.path}
                  sx={{
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    fontWeight: link.path === "/" ? 700 : 400,
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: link.path === "/" ? "80%" : "0%",
                      height: "2px",
                      bgcolor: "#f15550",
                      transform: "translateX(-50%)",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "80%",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

