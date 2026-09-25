import React from 'react';
import { ParticleField } from './components/ParticleField';
import { Spotlight } from './components/Spotlight';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#a3a3a3] selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Interactive Canvases */}
      <ParticleField />
      <Spotlight />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <MetricsBar />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
