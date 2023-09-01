import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
