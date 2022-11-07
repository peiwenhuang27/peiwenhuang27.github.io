import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Works from './Components/Pages/Works';
import NavBar from './Components/NavBar';
import './scss/main.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Works">Works</Link>
          </li>
        </ul>

        {/* <NavBar /> */}

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Works" element={<Works />} />

        </Routes>

        <h2>Footer</h2>
      </div>      
    </Router> 
    
  );
}

export default App;
