import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PortCard from './PortCard';
import PortList from './PortList';

function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        # Portfolio
      </Typography>
      <Typography variant='body1' sx={{ color: 'grey' }}>
        Click on the card to view my portfolio.
      </Typography>
      <Box sx={{ marginTop: '40px' }}>
        <Grid container spacing={4}>
          {PortList.map((port) => (
            <Grid item xs={12} md={4} lg={4} key={port.id}>
              <PortCard
                name={port.name}
                desc={port.desc}
                cardImg={port.img}
                tag1={port.tag1}
                tag2={port.tag2}
                route={port.route}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Portfolio;
