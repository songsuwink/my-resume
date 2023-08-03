import React, { Suspense } from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

const Homepage = React.lazy(() => import("./components/pages/Home/Home"));
const Resume = React.lazy(() => import("./components/pages/Resume/Resume"));
const Experience = React.lazy(() =>
  import("./components/pages/Experience/Experience")
);
const About = React.lazy(() => import("./components/pages/About/About"));
const Contact = React.lazy(() => import("./components/pages/Contact/Contact"));
const Portfolio = React.lazy(() =>
  import("./components/pages/Portfolio/Portfolio")
);
const ITStock_Info = React.lazy(() =>
  import("./components/pages/Portfolio/ITStock/Infomation")
);
const QAInspector_Info = React.lazy(() =>
  import("./components/pages/Portfolio/QAInspector/Information")
);
const PPEStock_Info = React.lazy(() =>
  import("./components/pages/Portfolio/PPEStock/Information")
);
const OKRs_Info = React.lazy(() =>
  import("./components/pages/Portfolio/Okrs/Information")
);
const Learning_Info = React.lazy(() =>
  import("./components/pages/Portfolio/Learning/Information")
);

function Routers() {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/itstock-info" element={<ITStock_Info />} />
          <Route path="/qainspector-info" element={<QAInspector_Info />} />
          <Route path="/ppestock-info" element={<PPEStock_Info />} />
          <Route path="/okrs-info" element={<OKRs_Info />} />
          <Route path="/learning-info" element={<Learning_Info />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default Routers;
