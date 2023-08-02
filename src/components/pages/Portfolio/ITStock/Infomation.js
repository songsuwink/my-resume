import React, { useEffect } from "react";
import image1 from "./images/3.PNG";
import image2 from "./images/4.PNG";
import image3 from "./images/5.PNG";
import image4 from "./images/6.PNG";
import { Box, Grid, Typography } from "@mui/material";

const images = [image1, image2, image3, image4];

function Infomation() {
  useEffect(() => {
    document.title = "IT Stock Information - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#454360" }}>
        IT Stock
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

export default Infomation;
