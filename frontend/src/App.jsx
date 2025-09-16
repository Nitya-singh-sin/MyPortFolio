import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Project from './component/Pages/Project';
import Education from './component/Pages/Education';
import Contact from './component/Pages/Contact';
import Footer from './component/Pages/Footer';
import WhatsAppButton from './component/Pages/WhatsAppButton';
import PhoneButton from './component/Pages/PhoneButton';
import Login from './component/Pages/Login'; // ✅ Import Login page



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* ✅ Login route */}
        </Routes>
        <PhoneButton />
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
