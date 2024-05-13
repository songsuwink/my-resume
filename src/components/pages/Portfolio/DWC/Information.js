import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/dwc1.png';
import image2 from './images/dwc2.png';
import image3 from './images/dwc3.png';
import image4 from './images/dwc4.png';
import image5 from './images/dwc5.png';
import image6 from './images/dwc6.png';
import image7 from './images/dwc7.png';

import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';

const images = [
  {
    img: image1,
    desc: 'Login page',
  },
  {
    img: image2,
    desc: 'The page shows room information, roommates, and personal information.',
  },
  { img: image3, desc: 'The page shows the schedule of activities.' },
  { img: image4, desc: 'Page showing group members' },
  { img: image5, desc: 'Page for sharing photos during the event' },
  {
    img: image6,
    desc: 'Example of sharing images displayed on the projector screen',
  },
  { img: image7, desc: 'Random prize distribution to employees' },
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
    document.title =
      'Dreamwork Camp Information - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        Dreamwork Camp
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant='body1'>
          Web application for Dreamwork Camp Event, Used for booking hotel rooms
          Do group activities and share photos.
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
            Google Apps Script API create, modify to google sheet and google
            drive
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
            Reactjs, Javascript and Material UI
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
