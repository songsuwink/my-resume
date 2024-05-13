import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import ITStock from './ITStock/ITStock';
import QAInspector from './QAInspector/QAInspector';
import PPEStock from './PPEStock/PPEStock';
import OKRs from './Okrs/Okrs';
import Learning from './Learning/Learning';
import AntUni from './AntUni/AntUniPage';
import DWC from './DWC/DWC';
import HNY from './HNY/HNY';
import JTA_Revision from './JTARevision/JTAPage';
import EmpProfile from './EmpProfile/EmpProfile';
import FamilyDay from './FamilyDay/FamilyDay';

const portList = [
  {
    name: 'ITStock',
    component: ITStock,
  },
  {
    name: 'QAInspector',
    component: QAInspector,
  },
  { name: 'PPEStock', component: PPEStock },
  { name: 'OKRs', component: OKRs },
  { name: 'AntUni', component: AntUni },
  { name: 'JTA_Revision', component: JTA_Revision },
  { name: 'EmpProfile', component: EmpProfile },
  { name: 'DWC', component: DWC },
  { name: 'HNY', component: HNY },
  { name: 'FamilyDay', component: FamilyDay },
];

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
        Click on card to see my portfolio.
      </Typography>
      <Box sx={{ marginTop: '40px' }}>
        <Grid container spacing={4}>
          {portList.map((port, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <port.component />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Portfolio;
