import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Works from './Components/Pages/Works';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './scss/main.scss';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
      </Routes>

      <Footer />
    </div>      
  );
}

export default App;
