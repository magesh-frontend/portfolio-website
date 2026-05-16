import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <About />
      </main>
    </div>
  );
}
