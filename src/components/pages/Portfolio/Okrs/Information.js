import React, { useEffect } from "react";
import image1 from "./images/okrs1.png";
import image2 from "./images/okrs2.png";
import { Box, Grid, Typography } from "@mui/material";

const images = [image1, image2];

function Information() {
  useEffect(() => {
    document.title = "OKRs Information - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
        OKRs
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Grid container justifyContent="center">
          {images.map((item, index) => (
            <Grid item xs={10} md={10} lg={10} key={index}>
              <img
                src={item}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  marginBottom: "50px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Information;
