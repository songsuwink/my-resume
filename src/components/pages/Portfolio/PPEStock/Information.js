import React, { useEffect, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import image1 from "./images/Capture2.PNG";
import image2 from "./images/Capture3.PNG";
import image3 from "./images/Capture4.PNG";
import image4 from "./images/Capture5.PNG";
import { Box, Grid, Typography } from "@mui/material";
import "../styles.css";

const images = [image1, image2, image3, image4];

function Information() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    document.title = "PPE Stock Information - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#212121" }}>
        PPE Stock
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Grid container justifyContent="center">
          {images.map((item, index) => (
            <Grid item xs={10} md={10} lg={10} key={index}>
              <img
                src={item}
                alt=""
                onClick={() => openImageViewer(index)}
                className="image-project"
              />
            </Grid>
          ))}
        </Grid>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </Box>
    </div>
  );
}

export default Information;
