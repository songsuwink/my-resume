import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import ProfileHome1 from "../../images/ProfileHome1.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CottageIcon from "@mui/icons-material/Cottage";
import CakeIcon from "@mui/icons-material/Cake";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { styled } from "@mui/material/styles";
import PDFCV from "./files/Songsuwin_Kamhaeng_Resume.pdf";

const ButtonStyled = styled(Button)({
  borderRadius: "20px",
  backgroundColor: "#FF4C60",
  color: "#fff",
  padding: "8px 24px",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#FF4C60",
    color: "#fff",
  },
});

function Home() {
  const [myAge, setMyAge] = useState(0);
  const [myExp, setMyExp] = useState("");

  const calAge = () => {
    var today = new Date();
    var birthDate = new Date("1995/03/24");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setMyAge(age);
  };

  const calExp = () => {
    const birthDate = new Date("2018-05-15");
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    setMyExp(`${yearsDiff}Y / ${monthsDiff}M`);
  };

  useEffect(() => {
    document.title = "Home - My Resume | Songsuwin Kamhaeng";
    calAge();
    calExp();
  }, []);

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
                <Typography
                  sx={{ fontWeight: "700", fontSize: "3em", color: "#454360" }}
                >
                  Hello,
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.5em",
                    color: "#5E5C7F",
                  }}
                >
                  I'm Songsuwin Kamhaeng
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <Chip
                    icon={
                      <FiberManualRecordIcon
                        sx={{ color: "#454360 !important" }}
                      />
                    }
                    label="Programmer"
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "#DEDEEA",
                      color: "#5E5C7F",
                    }}
                  />
                  <Chip
                    icon={
                      <FiberManualRecordIcon
                        sx={{ color: "#454360 !important" }}
                      />
                    }
                    label="Web Developer"
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "#DEDEEA",
                      color: "#5E5C7F",
                    }}
                  />
                </Box>
                <Box sx={{ marginTop: "40px" }}>
                  <Box
                    sx={{
                      backgroundColor: "#dedeea5e",
                      borderRadius: "10px",
                      padding: "32px 24px",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{ color: "#454360", fontWeight: "600" }}
                        >
                          Nickname
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5E5C7F",
                          }}
                          gutterBottom
                        >
                          Kluey
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{ color: "#454360", fontWeight: "600" }}
                        >
                          Age
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5E5C7F",
                          }}
                          gutterBottom
                        >
                          {myAge}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{ color: "#454360", fontWeight: "600" }}
                        >
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5E5C7F",
                          }}
                          gutterBottom
                        >
                          22/2 Sunthonphu 7, Soi Ariyakun, Thang Kwain, Klaeng,
                          Rayong 21110
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{ color: "#454360", fontWeight: "600" }}
                        >
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5E5C7F",
                          }}
                          gutterBottom
                        >
                          songsuwinkluey@gmail.com
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{ color: "#454360", fontWeight: "600" }}
                        >
                          Work Experience
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5E5C7F",
                          }}
                          gutterBottom
                        >
                          {myExp}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <ButtonStyled
                      variant="contained"
                      onClick={() => window.open(PDFCV)}
                    >
                      Download CV
                    </ButtonStyled>
                  </Box>
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
        <Portfolio />
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Contact />
      </Box>
    </div>
  );
}

export default Home;
