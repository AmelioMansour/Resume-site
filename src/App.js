
import './App.css';

import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home"><Home /></div> {/* Add the 'id' attribute */}
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}

export default App;
