import React, { useEffect } from 'react';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import Profile1 from '../../images/Profile1.jpg';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import UXUIDesign from './images/paint-palette.png';
import CSSHTML from './images/coding.png';
import Js from './images/javascript.png';
import ReactImg from './images/science.png';
import SQL from './images/big-data.png';
import CSharp from './images/c-sharp.png';
import git from './images/merge.png';
import NodeJS from './images/nodejs.png';
import Bootstrap from './images/bootstrap.png';
import MUI from './images/mui.png';

import VisualStudio from './images/visual-studio.png';
import VisualStudioCode from './images/visual-studio-code-1.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Office from './images/office.png';
import Photoshop from './images/photoshop.png';

const PaperSkillStyled = styled(Paper)({
  borderRadius: '15px',
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  backgroundColor: '#fff',
  padding: '16px',
  height: '100%',
  '& .MuiTypography-root': {
    color: '#212121',
  },
  display: 'flex',
  alignItems: 'center',
});

const skills = [
  {
    id: 1,
    name: 'UX/UI Design',
    image: UXUIDesign,
  },
  {
    id: 2,
    name: 'CSS/HTML',
    image: CSSHTML,
  },
  {
    id: 3,
    name: 'Javascript',
    image: Js,
  },
  {
    id: 4,
    name: 'React',
    image: ReactImg,
  },
  { id: 5, name: 'SQL', image: SQL },
  { id: 6, name: 'ASP.NET (C#)', image: CSharp },
  { id: 7, name: 'Git', image: git },
  { id: 8, name: 'NodeJS', image: NodeJS },
  { id: 9, name: 'Bootstrap', image: Bootstrap },
  { id: 10, name: 'Material UI', image: MUI },
];

const tools = [
  {
    id: 1,
    name: 'Visual Studio',
    image: VisualStudio,
  },
  { id: 2, name: 'Visual Studio Code', image: VisualStudioCode },
  { id: 3, name: 'Microsoft Office', image: Office },
  { id: 4, name: 'Adobe Photoshop', image: Photoshop },
];

function About() {
  useEffect(() => {
    document.title = 'About Me - My Resume | Songsuwin Kamhaeng';
  }, []);

  return (
    <div>
      <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
        # About Me
      </Typography>
      <Box sx={{ marginTop: '40px' }}>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt='Profile1'
                src={Profile1}
                sx={{ width: '250px', height: '250px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                backgroundColor: '#fafafa',
                borderRadius: '20px',
                padding: '32px 24px',
              }}
            >
              <Typography>
                <FormatQuoteIcon
                  sx={{
                    transform: 'rotate(360deg) scaleX(-1)',
                    fontSize: '40px',
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  textWrap: 'wrap',
                  color: '#212121',
                  fontWeight: '500',
                  marginTop: '8px',
                  marginBottom: '16px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                }}
              >
                I am Songsuwin Kamhaeng, web developer from Rayong. I graduated
                in Information Technology from Kasetsart University Sriracha
                Campus. I have experience in website design and building
                responsive website, I using CSS, HTML, Javascript and Reactjs.
              </Typography>
              <Typography align='right'>
                <FormatQuoteIcon sx={{ fontSize: '40px' }} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
          Skill
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Grid container spacing={2}>
            {skills.map((item) => (
              <Grid item xs={12} md={3} lg={3} key={item.id}>
                <PaperSkillStyled>
                  <Grid container alignItems='center' spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src={item.image}
                          alt='image'
                          style={{ width: '35px', height: '35px' }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                      <Typography
                        align='center'
                        sx={{ fontSize: '1rem', fontWeight: '500' }}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </PaperSkillStyled>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant='h5' sx={{ fontWeight: '600', color: '#212121' }}>
          Tools
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Grid container spacing={2}>
            {tools.map((item) => (
              <Grid item xs={12} md={3} lg={3} key={item.id}>
                <PaperSkillStyled>
                  <Grid container alignItems='center' spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src={item.image}
                          alt='image'
                          style={{ width: '35px', height: '35px' }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                      <Typography
                        align='center'
                        sx={{ fontSize: '1rem', fontWeight: '500' }}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </PaperSkillStyled>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default About;
