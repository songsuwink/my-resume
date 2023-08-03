import React, { useEffect } from "react";
import image1 from "./images/learning1.png";
import image2 from "./images/learning2.png";
import image3 from "./images/learning3.png";
import image4 from "./images/learning4.png";
import image5 from "./images/learning5.png";
import { Box, Grid, Typography } from "@mui/material";

const images = [image1, image2, image3, image4, image5];

function Information() {
  useEffect(() => {
    document.title = "Learning Information - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
        Learning
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
