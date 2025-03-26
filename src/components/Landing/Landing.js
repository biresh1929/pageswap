"use client"
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Paper,
  useTheme,
  alpha,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material"
import Link from "next/link"
import { ArrowForward, Memory, Storage, Code, BugReport } from "@mui/icons-material"
import Navbar from "../Navigation/Navbar"

const Landing = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: "#050A30",
        minHeight: "100vh",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(30, 60, 114, 0.4) 0%, rgba(5, 10, 48, 0.8) 90%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            mt: { xs: 2, md: 4 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid item xs={12} md={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box sx={{ position: "relative" }}>
              <Chip
                label="OS CONCEPTS"
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.primary.light,
                  mb: 2,
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #FFFFFF 0%, #f15550 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                Page Replacement Algorithms
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: alpha("#fff", 0.8),
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: "90%",
                  mb: 4,
                }}
              >
                When a page fault occurs, the required page has to be brought from the secondary memory. If all the
                frames of main memory are already occupied, then a page has to be replaced. The page replacement
                algorithm decides which memory page is to be replaced.
              </Typography>

              <Button
                variant="contained"
                component={Link}
                href="/home"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  background: "linear-gradient(45deg, #f15550 30%, #ff7b54 90%)",
                  boxShadow: "0 8px 20px rgba(241, 85, 80, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 25px rgba(241, 85, 80, 0.4)",
                  },
                }}
                endIcon={<ArrowForward />}
              >
                Go To Simulator
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              component="img"
              src="./images/pageReplacement1.png"
              alt="Page Replacement Diagram"
              sx={{
                width: "100%",
                maxWidth: 450,
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
                boxShadow: "0 20px 80px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transform: { xs: "scale(0.9)", md: "scale(1)" },
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Concepts Section */}
        <Box sx={{ mt: { xs: 6, md: 10 }, mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              background: "linear-gradient(90deg, #FFFFFF 30%, #f15550 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Key Concepts in Memory Management
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                title: "What is a page?",
                descr:
                  "For non-contiguous memory allocation, the Logical address Space is divided into fixed-size blocks, called pages.",
                icon: <Memory fontSize="large" sx={{ color: "#f15550" }} />,
              },
              {
                title: "What is a frame?",
                descr:
                  "The Physical Address Space (Main Memory) is conceptually divided into a number of fixed-size blocks, called frames.",
                icon: <Storage fontSize="large" sx={{ color: "#f15550" }} />,
              },
              {
                title: "What is paging?",
                descr:
                  "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory.",
                icon: <Code fontSize="large" sx={{ color: "#f15550" }} />,
              },
              {
                title: "What is page fault?",
                descr:
                  "Page fault - A page fault occurs when a page referenced by the CPU is not found in the main memory.",
                icon: <BugReport fontSize="large" sx={{ color: "#f15550" }} />,
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          bgcolor: "rgba(241, 85, 80, 0.1)",
                          mr: 2,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "1.2rem", md: "1.4rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: alpha("#fff", 0.7),
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {item.descr}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Algorithms Section */}
        <Box sx={{ mt: { xs: 6, md: 10 }, mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              background: "linear-gradient(90deg, #FFFFFF 30%, #f15550 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Page Replacement Algorithms
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                name: "FCFS",
                fullName: "First Come First Serve",
                description: "Replaces the page that has been in memory the longest.",
              },
              {
                name: "OPR",
                fullName: "Optimal Page Replacement",
                description: "Replaces the page that will not be used for the longest period of time.",
              },
              {
                name: "LRU",
                fullName: "Least Recently Used",
                description: "Replaces the page that has not been used for the longest period of time.",
              },
              {
                name: "MRU",
                fullName: "Most Recently Used",
                description: "Replaces the page that has been used most recently.",
              },
            ].map((algo, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={`./images/${algo.name}.png`}
                    alt={algo.name}
                    sx={{
                      objectFit: "cover",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#fff",
                      }}
                    >
                      {algo.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        mb: 2,
                        color: "#f15550",
                      }}
                    >
                      {algo.fullName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha("#fff", 0.7),
                        lineHeight: 1.6,
                      }}
                    >
                      {algo.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 8,
            mb: 4,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(241, 85, 80, 0.2) 0%, rgba(30, 60, 114, 0.2) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              width: "100%",
              maxWidth: 900,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Ready to Explore Page Replacement Algorithms?
            </Typography>
            <Typography
              sx={{
                color: alpha("#fff", 0.8),
                mb: 4,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              Dive deeper into the world of operating systems and memory management. Learn how different page
              replacement algorithms work and compare their performance.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                component={Link}
                href="/algo"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  background: "linear-gradient(45deg, #f15550 30%, #ff7b54 90%)",
                  boxShadow: "0 8px 20px rgba(241, 85, 80, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 25px rgba(241, 85, 80, 0.4)",
                  },
                }}
                endIcon={<ArrowForward />}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                component={Link}
                href="/home"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  borderColor: alpha("#f15550", 0.5),
                  color: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#f15550",
                    background: "rgba(241, 85, 80, 0.1)",
                  },
                }}
              >
                Try Simulator
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(241, 85, 80, 0.2) 0%, rgba(241, 85, 80, 0) 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 60, 114, 0.3) 0%, rgba(30, 60, 114, 0) 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
    </Box>
  )
}

export default Landing

