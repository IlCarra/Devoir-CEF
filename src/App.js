import './App.css';
import React from 'react';

import CustomNavBar from './components/navbar';
import Footer from './components/footer';

import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Services from './pages/service';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import MentionsLegales from './pages/mentions-legales';


function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/service' element={<Services />} />
        <Route path='/pages/portfolio' element={<Portfolio />} />
        <Route path='/pages/contact' element={<Contact />} />
        <Route path='/pages/mentions-legales' element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
