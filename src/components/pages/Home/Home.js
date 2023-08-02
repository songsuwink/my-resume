import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import ProfileHome1 from "../../images/ProfileHome1.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CottageIcon from "@mui/icons-material/Cottage";
import CakeIcon from "@mui/icons-material/Cake";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <img
              src={ProfileHome1}
              alt=""
              style={{ borderRadius: "20px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={10} lg={10}>
                <Typography sx={{ fontWeight: "700", fontSize: "3em" }}>
                  Hello,
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.5em",
                    color: "#424242",
                  }}
                >
                  I'm Songsuwin Kamhaeng
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <Chip
                    icon={<FiberManualRecordIcon />}
                    label="Programmer"
                    sx={{ marginRight: "10px" }}
                  />
                  <Chip
                    icon={<FiberManualRecordIcon />}
                    label="Web Developer"
                  />
                </Box>
                <Box sx={{ marginTop: "40px" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#424242",
                    }}
                  >
                    <CottageIcon sx={{ marginRight: "10px" }} /> 22/2
                    Sunthornphu 7, Soi Ariyakun, Thang Kwain, Klaeng, Rayong
                    21110
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#424242",
                    }}
                  >
                    <CakeIcon sx={{ marginRight: "10px" }} /> 24 March 1995
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <About />
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Experience />
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Contact />
      </Box>
    </div>
  );
}

export default Home;
