import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import Achievments from './components/Achievments';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router> {/* Wrap your entire app with the Router */}
      <div className="App">
        <NavBar />
        <div id="home"><Home /></div> {/* Add the 'id' attribute */}
        <div id="education"><Education /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="achievments" style={{ marginBottom: '70vh' }}><Achievments /></div>
      </div>
    </Router>
  );
}

export default App;
