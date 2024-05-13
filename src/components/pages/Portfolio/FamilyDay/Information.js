import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/familyDay1.png';
import image2 from './images/familyDay2.png';
import image3 from './images/familyDay3.png';
import image4 from './images/familyDay4.png';
import image5 from './images/familyDay5.png';
import image8 from './images/familyDay8.png';

import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';

const images = [
  {
    img: image1,
    desc: 'Login page',
  },
  {
    img: image2,
    desc: 'Personal information from the questionnaire and QR Code for registering to participate in the activity.',
  },
  {
    img: image3,
    desc: 'Schedule of activities',
  },
  {
    img: image4,
    desc: 'Activities: Find landmarks and take photos to submit to a contest',
  },
  {
    img: image5,
    desc: 'Registration information for admins',
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
    document.title = 'Family Day Information - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        Family Day
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant='body1'>
          Web application for Family day Event, For registering to participate
          in activities Schedule activities and photo sharing activities
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
