import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import image1 from './images/aniuni1.png';

const CardStyled = styled(Card)({
  borderRadius: '15px',
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  '& .MuiCardActionArea-root': {
    height: '100%',
  },
  '& .MuiTypography-h5': {
    fontWeight: '600',
    fontSize: '22px',
    color: '#212121',
  },
  '& .MuiTypography-body2': {
    color: 'grey',
  },
});

const ChipStyled = styled(Chip)({
  backgroundColor: '#eeeeee',
  color: '#757575',
  borderRadius: '5px',
  marginRight: '8px',
});

function AntUniPage() {
  return (
    <CardStyled
      onClick={() => window.open('/antUni-info', '_blank', 'noreferrer')}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={image1}
          alt='card image'
        />
        <CardContent>
          <Box sx={{ height: '100px' }}>
            <Typography gutterBottom variant='h5' component='div'>
              AntHR & UniHR
            </Typography>
            <Box sx={{ height: '60px' }}>
              <Typography variant='body2' color='text.secondary'>
                Web application for HR Management.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <ChipStyled label='React' size='small' />
            <ChipStyled label='Javascript' size='small' />
          </Box>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}

export default AntUniPage;
