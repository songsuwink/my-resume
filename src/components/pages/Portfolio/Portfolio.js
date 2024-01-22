import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import ITStock from "./ITStock/ITStock";
import QAInspector from "./QAInspector/QAInspector";
import PPEStock from "./PPEStock/PPEStock";
import OKRs from "./Okrs/Okrs";
import Learning from "./Learning/Learning";
import DWC from "./DWC/DWC";
import HNY from "./HNY/HNY";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
        Portfolio
      </Typography>
      <Typography variant="body1" sx={{ color: "#8B88B1" }}>
        Click on card to see my portfolio.
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <ITStock />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <QAInspector />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <PPEStock />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <OKRs />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Learning />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <DWC />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <HNY />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Portfolio;
