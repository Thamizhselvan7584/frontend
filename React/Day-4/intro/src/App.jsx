import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Courses from "./Pages/Courses";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;