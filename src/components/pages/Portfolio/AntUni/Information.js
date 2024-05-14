import React, { useEffect, useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import image1 from './images/aniuni1.png';
import { Box, Grid, Typography } from '@mui/material';
import '../styles.css';
import PortList from '../PortList';

const images = [
  {
    img: image1,
    desc: 'Menu page',
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
      'AntHR & UniHRR Information - My Resume | Songsuwin Kamhaeng';
    const getPortData = PortList.find((port) => port.id === 5);
    setPort(getPortData);
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
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
      <Box>
        <Typography variant='body1' fontWeight='600' gutterBottom>
          Assigned work
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Creating an API to retrieve data from SQL Server and use it in a{' '}
          <span style={{ fontWeight: '600', textDecoration: 'underline' }}>
            React Redux
          </span>
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Use{' '}
          <span style={{ fontWeight: '600', textDecoration: 'underline' }}>
            Google Maps
          </span>{' '}
          allows employees to sign in to their work areas by drawing them on the
          map
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Use Line Official to connect to the web application via{' '}
          <span style={{ fontWeight: '600', textDecoration: 'underline' }}>
            Line LIFF
          </span>
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Create a translation function in a web application using{' '}
          <span style={{ fontWeight: '600', textDecoration: 'underline' }}>
            i18nex
          </span>
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Create PDF forms from employee information
        </Typography>
        <Typography variant='body1' gutterBottom>
          - Managing and maintaining SQL Server databases
        </Typography>
        <Typography variant='body1' gutterBottom>
          etc.
        </Typography>
      </Box>
    </div>
  );
}

export default Information;
