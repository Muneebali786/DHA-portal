import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Facilities from './pages/Facilities.js';
import Projects from './pages/Projects';
import Services from './pages/Services.js';
import Footer from './pages/Footer';



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Sidebar>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
