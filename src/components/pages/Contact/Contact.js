import React, { useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const PaperStyled = styled(Paper)({
  borderRadius: '20px',
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  backgroundColor: '#fff',
  padding: '24px',
  height: '100%',
});

function Contact() {
  useEffect(() => {
    document.title = 'Contact - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        # Contact
      </Typography>
      <Box sx={{ marginTop: '24px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <PaperStyled>
              <Grid container alignItems='center'>
                <Grid item xs={3} md={3} lg={3}>
                  <EmailOutlinedIcon
                    sx={{ fontSize: '50px', color: '#FF4C60' }}
                  />
                </Grid>
                <Grid item xs={9} md={9} lg={9}>
                  <Typography
                    variant='h6'
                    sx={{ color: 'grey', fontSize: '1rem' }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ color: '#212121', fontWeight: '600' }}
                  >
                    songsuwinkluey@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </PaperStyled>
          </Grid>
          {/*
          <Grid item xs={12} md={4} lg={4}>
            <PaperStyled>
              <Grid container alignItems="center">
                <Grid item xs={3} md={3} lg={3}>
                  <FacebookOutlinedIcon
                    sx={{ fontSize: "50px", color: "#FF4C60" }}
                  />
                </Grid>
                <Grid item xs={9} md={9} lg={9}>
                  <Typography
                    variant="h6"
                    sx={{ color: "grey", fontSize: "1rem" }}
                  >
                    Facebook
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#212121", fontWeight: "600" }}
                  >
                    Songsuwin Kluey Kamhaeng
                  </Typography>
                </Grid>
              </Grid>
            </PaperStyled>
          </Grid>
           */}
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;
