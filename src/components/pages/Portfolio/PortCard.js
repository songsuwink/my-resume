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
import { Link } from 'react-router-dom';

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
  '&.aspnet-mvc': {
    backgroundColor: '#ede7f6',
    color: '#7c4dff',
  },
  '&.react': {
    backgroundColor: '#e8eaf6',
    color: '#536dfe',
  },
  '&.javascript': {
    backgroundColor: '#fff8e1',
    color: '#ffab00',
  },
});

function PortCard(props) {
  const { name, desc, cardImg, tag1, tag2, route } = props;

  return (
    <CardStyled>
      <CardActionArea>
        <Link
          target='_blank'
          to={route}
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <CardMedia
            component='img'
            height='150'
            image={cardImg}
            alt='card image'
          />
          <CardContent>
            <Box sx={{ height: '100px' }}>
              <Typography gutterBottom variant='h5' component='div'>
                {name}
              </Typography>
              <Box sx={{ height: '60px' }}>
                <Typography variant='body2' color='text.secondary'>
                  {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              {tag1 && (
                <ChipStyled
                  label={tag1}
                  size='small'
                  className={
                    tag1 === 'ASP.NET MVC'
                      ? 'aspnet-mvc'
                      : tag1 === 'React'
                      ? 'react'
                      : ''
                  }
                />
              )}
              {tag2 && (
                <ChipStyled
                  label={tag2}
                  size='small'
                  className={tag2 === 'Javascript' ? 'javascript' : ''}
                />
              )}
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </CardStyled>
  );
}

export default PortCard;
