import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
