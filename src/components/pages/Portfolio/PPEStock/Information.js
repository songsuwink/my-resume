import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/Capture2.PNG';
import image2 from './images/Capture3.PNG';
import image3 from './images/Capture4.PNG';
import image4 from './images/Capture5.PNG';
import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';

const images = [
  {
    img: image1,
    desc: 'List of all PPE equipment available in the system',
  },
  {
    img: image2,
    desc: 'How to add PPE equipment to the system',
  },
  {
    img: image3,
    desc: 'How to requisition PPE equipment into the system',
  },
  {
    img: image4,
    desc: 'Record of PPE equipment into the system',
  },
];

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
    document.title = 'PPE Stock Information - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h4' sx={{ fontWeight: '600', color: '#212121' }}>
        PPE Stock
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant='body1'>
          Web application for Safety Stock management.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant='body1'
            fontWeight='600'
            display='inline'
            sx={{ mr: 1 }}
          >
            Backend :
          </Typography>
          <Typography variant='body1' display='inline'>
            ASP.NET MVC (C#)
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='body1'
            fontWeight='600'
            display='inline'
            sx={{ mr: 1 }}
          >
            Frontend :
          </Typography>
          <Typography variant='body1' display='inline'>
            HTML, CSS, Javascript and Bootstrap
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='body1'
            fontWeight='600'
            display='inline'
            sx={{ mr: 1 }}
          >
            Database :
          </Typography>
          <Typography variant='body1' display='inline'>
            SQL Server
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '40px' }}>
        <Grid container justifyContent='center'>
          {images.map((item, index) => (
            <Grid item xs={10} md={10} lg={10} key={index}>
              <img
                src={item.img}
                alt=''
                onClick={() => openImageViewer(index)}
                className='image-project'
              />
              <Typography variant='subtitle1' sx={{ mb: 6 }}>
                {item.desc}
              </Typography>
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
