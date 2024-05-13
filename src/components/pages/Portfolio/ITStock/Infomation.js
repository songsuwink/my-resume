import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/3.PNG';
import image2 from './images/4.PNG';
import image3 from './images/5.PNG';
import image4 from './images/6.PNG';
import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';

const images = [
  {
    img: image1,
    desc: 'Information about all serial number devices in the system',
  },
  {
    img: image2,
    desc: 'How to requisition device for users and use it in the work area',
  },
  {
    img: image3,
    desc: 'History of all devices used in the system',
  },
  {
    img: image4,
    desc: 'Information about all accessories part in the system',
  },
];

function Infomation() {
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
    document.title = 'IT Stock Information - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        IT Stock
      </Typography>
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant='body1'>
          Web application for IT Stock management.
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
      <Box sx={{ mt: 4, mb: 4 }}>
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

export default Infomation;
