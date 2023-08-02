import React, { useEffect } from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import Profile1 from "../../images/Profile1.jpg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import UXUIDesign from "./images/paint-palette.png";
import CSSHTML from "./images/coding.png";
import Js from "./images/javascript.png";
import ReactImg from "./images/science.png";
import SQL from "./images/big-data.png";
import CSharp from "./images/c-sharp.png";
import git from "./images/merge.png";
import VisualStudio from "./images/visual-studio.png";
import VisualStudioCode from "./images/visual-studio-code-1.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const PaperSkillStyled = styled(Paper)({
  borderRadius: "20px",
  boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
  backgroundColor: "#fff",
  padding: "16px",
  height: "100%",
  "& .MuiTypography-root": {
    color: "#5E5C7F",
  },
});

function About() {
  useEffect(() => {
    document.title = "About Me - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
        About Me
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                alt="Profile1"
                src={Profile1}
                sx={{ width: "250px", height: "250px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                backgroundColor: "#dedeea5e",
                borderRadius: "10px",
                padding: "32px 24px",
              }}
            >
              <Typography>
                <FormatQuoteIcon
                  sx={{
                    transform: "rotate(360deg) scaleX(-1)",
                    fontSize: "40px",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#5E5C7F",
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
                align="center"
              >
                I am Songsuwin Kamhaeng, web developer from Rayong. I graduated
                in Information Technology from Kasetsart University Sriracha
                Campus. I have experience in website design and building
                responsive website, I write CSS, HTML, JavaScript and ReactJS.
              </Typography>
              <Typography align="right">
                <FormatQuoteIcon sx={{ fontSize: "40px" }} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
          Skill
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={UXUIDesign}
                        alt="uxui-design"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      UX/UI Design
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={CSSHTML}
                        alt="css-html"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      CSS/HTML
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={Js}
                        alt="js"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      Javascript
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={ReactImg}
                        alt="react"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      React
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={SQL}
                        alt="sql"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      SQL
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={CSharp}
                        alt="C#"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      ASP.NET (C#)
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={git}
                        alt="git"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      Git
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
          Tools
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={VisualStudio}
                        alt="visual-studio"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      Visual Studio
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <PaperSkillStyled>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={VisualStudioCode}
                        alt="visual-studio-code"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h6" align="center">
                      Visual Studio Code
                    </Typography>
                  </Grid>
                </Grid>
              </PaperSkillStyled>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default About;
