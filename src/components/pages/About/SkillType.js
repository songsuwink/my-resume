import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Typography } from '@mui/material';

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

function SkillType(props) {
  const { typeName, typeList } = props;

  return (
    <React.Fragment>
      <Typography variant='h6' sx={{ fontWeight: '600', color: '#212121' }}>
        {typeName}
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          {typeList.map((item) => (
            <Grid item xs={6} md={3} lg={3} key={item.id}>
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
    </React.Fragment>
  );
}

export default SkillType;
