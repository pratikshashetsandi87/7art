import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import WebDevelopment from "./Pages/WebDevelopment";
import GraphicDesign from "./Pages/GraphicDesign";
import ContentWriting from "./Pages/ContentWriting";
import BusinessLicensing from "./Pages/BusinessLicensing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/web-development" element={<WebDevelopment />}/>
      <Route path="/services/graphic-design" element={<GraphicDesign />} />
      <Route path="/services/content-writing" element={<ContentWriting/>} />
      <Route path="/services/business-licensing" element={<BusinessLicensing />} />


      
    </Routes>
  );
}

export default App;
