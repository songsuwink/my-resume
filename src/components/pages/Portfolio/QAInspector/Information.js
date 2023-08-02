import React, { useEffect } from "react";
import image1 from "./images/Capture1.png";
import image2 from "./images/Capture2.png";
import image3 from "./images/Capture5.png";
import image4 from "./images/Capture8.png";
import { Grid } from "@mui/material";

const images = [image1, image2, image3, image4];

function Information() {
  useEffect(() => {
    document.title =
      "QA Inspector Information - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Information;
