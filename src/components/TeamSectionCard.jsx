import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, Link } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TeamSectionCard() {
  const teamMember = [
    {
      id: 1,
      name: "Patrick V. Schroeder",
      jobTitle: "UI/UX Designer",
      img: "./src/assets/images/member6.jpg",
    },
    {
      id: 2,
      name: "Micheal A. Braun",
      jobTitle: "UI/UX Designer",
      img: "./src/assets/images/member7.jpg",
    },
    {
      id: 3,
      name: "James V. Decastro",
      jobTitle: "Senior Markter",
      img: "./src/assets/images/member8.jpg",
    },
    {
      id: 4,
      name: "Troy V. Richardson",
      jobTitle: "Web Designer",
      img: "./src/assets/images/member9.jpg",
    },
    {
      id: 5,
      name: "Micheal A. Braun",
      jobTitle: "Apps Designer",
      img: "./src/assets/images/member10.jpg",
    },
  ];
  return (
    <Grid container columns={10} spacing={4} wrap="wrap">
      {teamMember.map((member) => (
        <Grid item xs={10} sm={5} md={2} key={member.id}>
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 0,
              boxShadow: "none",
              transition: "transform 1.8s",
              backgroundColor: "white",
              "&:hover": {
                // transform: "scale(1.05)",
                backgroundColor: "white",
              },
              "&:hover .view-details": {
                opacity: 1,
                transform: "translateY(0)",
                backgroundColor: "white",
              },
              "&:hover .card-content": {
                opacity: 0,
                transform: "translateY(-20px)",
                backgroundColor: "white",
              },
            }}
          >
            <CardActionArea sx={{ backgroundColor: "white" }}>
              <CardMedia
                component="img"
                height="330"
                image={member.img}
                alt="team member"
              />
              <CardContent
                sx={{
                  paddingX: 0,
                  paddingY: 5,
                  backgroundColor: "white",
                  transition: "opacity 0.3s, transform 0.3s",
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"400px"}
                  >
                    {member.name}
                  </Typography>
                  <ArrowOutwardIcon sx={{ color: "#55e6a5", fontSize: 32 }} />
                </Box>
                <Typography variant="body2" color="#696969">
                  {member.jobTitle}
                </Typography>
              </CardContent>
              <Box
                className="view-details"
                sx={{
                  width: "100%",
                  height: "20%",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  color: "#55e6a5",
                  backgroundColor: "white",
                  paddingLeft: "16px",
                  transition: "opacity 0.3s, transform 0.8s",
                  opacity: 0,
                  transform: "translateY(20px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="#"
                    sx={{
                      color: "#55e6a5",
                      textDecoration: "none",
                      fontSize: 20,
                    }}
                  >
                    View Details
                  </Link>
                  <ArrowOutwardIcon sx={{ color: "#55e6a5", fontSize: 20 }} />
                </Box>
                <Box display={"flex"} gap={1}>
                  <FacebookOutlinedIcon
                    sx={{
                      color: "#696969",
                      fontSize: 30,
                      "&:hover": {
                        color: "#55e6a5",
                      },
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      color: "#696969",
                      fontSize: 30,
                      "&:hover": {
                        color: "#55e6a5",
                      },
                    }}
                  />
                  <TwitterIcon
                    sx={{
                      color: "#696969",
                      fontSize: 30,
                      "&:hover": {
                        color: "#55e6a5",
                      },
                    }}
                  />
                  <LinkedInIcon
                    sx={{
                      color: "#696969",
                      fontSize: 30,
                      "&:hover": {
                        color: "#55e6a5",
                      },
                    }}
                  />
                </Box>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
