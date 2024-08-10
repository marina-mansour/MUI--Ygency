import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import bg from "../assets/images/hero-two-bg.png";
import { red, yellow } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // backgroundColor: "#f8f8f8",
        padding: 2,
        backgroundImage: `url(${bg})`,

        backgroundSize: "Cover",
        backgroundPosition: "Center",
        height: "110vh",
        paddingX: 15,
      }}
    >
      {/* First Row (1:2) */}
      <Grid container spacing={2} height={"20vh"}>
        <Grid item xs={4}>
          <Box
            // bgcolor="lightblue"
            height="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img
              src="./src/assets/images/logo.png"
              alt="Logo"
              style={{ width: 300, height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            // bgcolor="lightcoral"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" gap={8} justifyContent="flex-end" width="100%">
              <Link
                href="#"
                color="gray"
                underline="none"
                display="flex"
                alignItems="center"
                sx={{
                  transition: "transform 1.8s",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <FacebookOutlinedIcon
                  sx={{ marginRight: 1, color: "#55e6a5" }}
                />
                Facebook
              </Link>
              <Link
                href="#"
                color="gray"
                underline="none"
                display="flex"
                alignItems="center"
                sx={{
                  transition: "transform 1.8s",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <TwitterIcon sx={{ marginRight: 1, color: "#55e6a5" }} />
                Twitter
              </Link>
              <Link
                href="#"
                color="gray"
                underline="none"
                display="flex"
                alignItems="center"
                sx={{
                  transition: "transform 1.8s",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <InstagramIcon sx={{ marginRight: 1, color: "#55e6a5" }} />
                Instagram
              </Link>
              <Link
                href="#"
                color="gray"
                underline="none"
                display="flex"
                alignItems="center"
                sx={{
                  transition: "transform 1.8s",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <LinkedInIcon sx={{ marginRight: 1, color: "#55e6a5" }} />
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Second Row (2:1) */}
      <Grid container spacing={2} height={"70vh"} sx={{ marginTop: 2 }}>
        <Grid item xs={8}>
          <Box
            // bgcolor="lightgreen"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection={"column"}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Avatar
                alt="ASharp"
                src="src\assets\images\lets-work.png"
                sx={{ width: 90, height: 90, marginTop: 2, marginRight: 1 }}
              />
              <Typography fontSize={90} fontWeight={"bold"}>
                Let's Work
              </Typography>
            </Box>
            <Typography fontSize={90} fontWeight={"bold"}>
              Together
            </Typography>
            <Box display={"flex"} justifyContent={"space-around"} gap={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 50,
                  fontSize: 28,
                  paddingX: 4,
                  paddingY: 1,
                  "&:hover": {
                    backgroundColor: "#55e6a5",
                  },
                }}
              >
                Support@gmail.com
                <ArrowOutwardIcon sx={{ marginLeft: 1, fontSize: 32 }} />
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 50,
                  fontSize: 28,
                  paddingX: 4,
                  paddingY: 1,
                  "&:hover": {
                    backgroundColor: "#55e6a5",
                  },
                }}
              >
                +000(123) 456 88
                <ArrowOutwardIcon sx={{ marginLeft: 1, fontSize: 32 }} />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            // bgcolor="lightgoldenrodyellow"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            flexDirection={"column"}
          >
            <Box width={"90%"}>
              <Typography fontSize={24} fontWeight={"bold"} marginBottom={4}>
                Quick Links
              </Typography>
              <Grid
                container
                spacing={6}
                // bgcolor={"lightblue"}
                // textAlign={"center"}
              >
                <Grid item xs={6}>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Popular Services
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Team Member
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Latest News
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Contact Us?
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Development
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Marketing
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Need a Career
                  </Link>
                  <Link
                    href="#"
                    color="gray"
                    underline="none"
                    display="block"
                    sx={{
                      fontSize: 20,
                      textDecoration: "none",
                      "&:hover": {
                        color: "#55e6a5",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Faqs ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Third Row (1:1) */}
      <Grid container spacing={2} height={"15vh"} sx={{ marginTop: 2 }}>
        <Grid item xs={8}>
          <Box
            // bgcolor="lightpink"
            height="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-end"
            gap={5}
            fontSize={18}
          >
            <Link
              href="#"
              color="gray"
              underline="none"
              display="flex"
              alignItems="center"
              sx={{
                transition: "transform 1.8s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              About
            </Link>
            <Link
              href="#"
              color="gray"
              underline="none"
              display="flex"
              alignItems="center"
              sx={{
                transition: "transform 1.8s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Services
            </Link>
            <Link
              href="#"
              color="gray"
              underline="none"
              display="flex"
              alignItems="center"
              sx={{
                transition: "transform 1.8s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              FAQs
            </Link>
            <Link
              href="#"
              color="gray"
              underline="none"
              display="flex"
              alignItems="center"
              sx={{
                transition: "transform 1.8s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              How IT Works
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            // bgcolor="lightgray"
            height="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Typography color={"gray"}>
              Copyright @2023, Ygency All Rights Reserved
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={8}>
    //       <Item>xs=8</Item>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Item>xs=8</Item>
    //     </Grid>
    //   </Grid>
    // </Box>

    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     backgroundImage: `url(${bg})`,

    //     // opacity: 0.5,
    //     backgroundSize: "Cover", // Cover the entire card
    //     backgroundPosition: "Center",
    //     height: "115vh",
    //   }}
    // >
    //   <Grid
    //     container
    //     bgcolor={"beige"}
    //     height={"20%"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //   >
    //     <Grid
    //       item
    //       md={4}
    //       sx={{
    //         bgcolor: "red",
    //         paddingTop: 4,
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100%",
    //       }}
    //     >
    //       <CardMedia
    //         component="img"
    //         // height={50}
    //         // width={50}
    //         image="./src/assets/images/logo.png"
    //         alt="logo"
    //         sx={{ margin: "0 auto", padding: "10 20" }}
    //         //   flexGrow={1}
    //       />
    //     </Grid>
    //     <Grid item md={8} bgcolor={"blue"} textAlign={"center"}>
    //       <Typography>hello</Typography>
    //     </Grid>
    //   </Grid>

    //   <Grid
    //     container
    //     spacing={2}
    //     bgcolor={"green"}
    //     height={"70%"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //   ></Grid>

    //   <Grid
    //     container
    //     spacing={2}
    //     bgcolor={"purple"}
    //     height={"15%"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //   ></Grid>
    // </Box>
  );
}

{
  /* <CardMedia
              component="img"
              height={50}
              width={50}
              image="./src/assets/images/logo.png"
              alt="logo"
              //   flexGrow={1}
              /> */
}

{
  /* <Box>
            <Link href="#" underline="none" color={"gray"}>
              Facebook
            </Link>
            <Link href="#" underline="none" color={"gray"}>
              Twitter
            </Link>
            <Link href="#" underline="none" color={"gray"}>
              Instagram
            </Link>
          </Box> */
}
