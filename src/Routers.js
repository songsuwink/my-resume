import React, { Suspense } from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const ContainerStyled = styled(Container)({
  paddingLeft: '0px',
  paddingRight: '0px',
});

const Homepage = React.lazy(() => import('./components/pages/Home/Home'));
const Resume = React.lazy(() => import('./components/pages/Resume/Resume'));
const Experience = React.lazy(() =>
  import('./components/pages/Experience/Experience')
);
const About = React.lazy(() => import('./components/pages/About/About'));
const Contact = React.lazy(() => import('./components/pages/Contact/Contact'));
const Portfolio = React.lazy(() =>
  import('./components/pages/Portfolio/Portfolio')
);
const ITStock_Info = React.lazy(() =>
  import('./components/pages/Portfolio/ITStock/Infomation')
);
const QAInspector_Info = React.lazy(() =>
  import('./components/pages/Portfolio/QAInspector/Information')
);
const PPEStock_Info = React.lazy(() =>
  import('./components/pages/Portfolio/PPEStock/Information')
);
const OKRs_Info = React.lazy(() =>
  import('./components/pages/Portfolio/Okrs/Information')
);
const Learning_Info = React.lazy(() =>
  import('./components/pages/Portfolio/Learning/Information')
);
const AntUni_Info = React.lazy(() =>
  import('./components/pages/Portfolio/AntUni/Information')
);
const JTA_Info = React.lazy(() =>
  import('./components/pages/Portfolio/JTARevision/Information')
);
const DWC_Info = React.lazy(() =>
  import('./components/pages/Portfolio/DWC/Information')
);
const HNY_Info = React.lazy(() =>
  import('./components/pages/Portfolio/HNY/Information')
);
const EmpProfile_Info = React.lazy(() =>
  import('./components/pages/Portfolio/EmpProfile/Information')
);
const FamilyDay_Info = React.lazy(() =>
  import('./components/pages/Portfolio/FamilyDay/Information')
);

function Routers() {
  return (
    <ContainerStyled maxWidth='lg'>
      <Suspense fallback={<div style={{ color: '#fff' }}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/itstock-info' element={<ITStock_Info />} />
          <Route path='/qainspector-info' element={<QAInspector_Info />} />
          <Route path='/ppestock-info' element={<PPEStock_Info />} />
          <Route path='/okrs-info' element={<OKRs_Info />} />
          <Route path='/learning-info' element={<Learning_Info />} />
          <Route path='/dwc-info' element={<DWC_Info />} />
          <Route path='hny-info' element={<HNY_Info />} />
          <Route path='antUni-info' element={<AntUni_Info />} />
          <Route path='jtaRevision-info' element={<JTA_Info />} />
          <Route path='empProfile-info' element={<EmpProfile_Info />} />
          <Route path='familyDay-info' element={<FamilyDay_Info />} />
        </Routes>
      </Suspense>
    </ContainerStyled>
  );
}

export default Routers;
