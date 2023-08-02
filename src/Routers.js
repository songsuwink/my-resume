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

function Routers() {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default Routers;
