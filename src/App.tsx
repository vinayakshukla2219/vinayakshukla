/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RevealProvider } from './context/RevealContext.tsx';
import { CoordinatedFiveCursors } from './components/CoordinatedFiveCursors.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Achievements } from './components/Achievements.tsx';
import { JourneyGallery } from './components/JourneyGallery.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { BackgroundEffects } from './components/BackgroundEffects.tsx';

export default function App() {
  return (
    <RevealProvider>
      <div className="relative min-h-screen bg-[#050608] text-slate-100 selection:bg-red-500/30 selection:text-white">
        {/* Five Coordinated Digital Designer Cursors Revealing Portfolio */}
        <CoordinatedFiveCursors />

        {/* Cinematic Red/Cyan Ambient Lighting & Grid */}
        <BackgroundEffects />

        {/* Fixed Sticky Header */}
        <Navbar />

        {/* Main Portfolio Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <JourneyGallery />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </RevealProvider>
  );
}
