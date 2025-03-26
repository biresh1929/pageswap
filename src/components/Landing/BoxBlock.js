"use client"
import { Box, Grid, Typography, Paper, useTheme, alpha } from "@mui/material"

const BoxBlock = (props) => {
  const theme = useTheme()

  return (
    <Grid item xs={12} sm={6} md={props.md || 3}>
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          p: 3,
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            background: "rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: theme.palette.primary.contrastText,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.primary.contrastText, 0.7),
              lineHeight: 1.6,
              flex: 1,
            }}
          >
            {props.descr}
          </Typography>
          {props.children}
        </Box>
      </Paper>
    </Grid>
  )
}

export default BoxBlock

