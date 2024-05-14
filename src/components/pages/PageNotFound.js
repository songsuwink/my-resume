import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import PageNotFoundImg from '../../components/images/pagenotfound.png';

const BoxStyled = styled(Box)({
  textAlign: 'center',
});

function PageNotFound() {
  return (
    <div>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <BoxStyled>
            <img src={PageNotFoundImg} alt='' style={{ width: '250px' }} />
            <Typography>Page Not Found</Typography>
          </BoxStyled>
        </Grid>
      </Grid>
    </div>
  );
}

export default PageNotFound;
