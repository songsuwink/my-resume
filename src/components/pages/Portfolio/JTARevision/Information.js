import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/jta1.png';
import image2 from './images/jta2.png';
import image3 from './images/jta3.png';
import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';
import PortList from '../PortList';

const images = [
  {
    img: image1,
    desc: 'JTA information of job positions',
  },
  {
    img: image2,
    desc: 'JTA information of job positions',
  },
  {
    img: image3,
    desc: 'Employee JTA information',
  },
];

function Information() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [port, setPort] = useState([]);

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
      'JTA Revision Information - My Resume | Songsuwin Kamhaeng';
    const getPortData = PortList.find((port) => port.id === 6);
    setPort(getPortData);
  }, []);

  return (
    <div>
      <Typography variant='h4' sx={{ fontWeight: '600', color: '#212121' }}>
        {port.name}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant='body1'>{port.desc}</Typography>
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
            Nodejs
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
