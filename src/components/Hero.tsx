import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Huge Subtle Watermark Background */}
      <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.10] md:opacity-[0.14] whitespace-nowrap z-0">
        <span
          className="font-display font-black text-[18vw] leading-none tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: '2px #ef4444',
            textShadow: '0 0 80px rgba(239,68,68,0.4)',
          }}
        >
          VINAYAK
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* LEFT SIDE: Large Visually Attractive Portrait Area with Only Vinayak's Personal Photograph */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="w-full max-w-md sm:max-w-lg">
            <div className="relative group">
              {/* Cinematic Red-Blue Ambient Aura */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-60 blur-3xl transition-all duration-700 group-hover:opacity-85 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 25% 25%, rgba(239,68,68,0.55) 0%, rgba(6,182,212,0.45) 55%, transparent 75%)',
                }}
              />

              {/* Cyber Container Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-[#090c13]/98 to-[#050608] border border-slate-700/80 p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl group-hover:border-red-500/60 transition-colors">
                {/* Technical Header Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-slate-800 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="tracking-widest uppercase font-bold text-slate-200">
                      IDENTIFIER // VINAYAK SHUKLA
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-semibold">OFFICIAL PORTRAIT</span>
                  </div>
                </div>

                {/* Primary Large Photograph Display - Directly Wrapped by RevealBox hero-portrait */}
                <RevealBox
                  id="hero-portrait"
                  direction="vertical"
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950"
                >
                  <img
                    src="/assets/aistudio/ef5bc4bf-5bd5-4c8b-bed7-d24d865c65a4_9b61a07f.jpg"
                    alt="Vinayak Shukla - Aspiring AI/ML Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Cinematic Red/Cyan Lighting Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-70 pointer-events-none" />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-25"
                    style={{
                      background:
                        'radial-gradient(circle at 85% 15%, rgba(239,68,68,0.8) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(6,182,212,0.8) 0%, transparent 50%)',
                    }}
                  />

                  {/* Corner Crosshairs / Selection Handles */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500 pointer-events-none shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500 pointer-events-none shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-display">
                        Vinayak Shukla
                      </div>
                      <div className="text-[10px] text-cyan-300 font-mono">
                        Aspiring AI/ML Developer · Kanpur, India
                      </div>
                    </div>
                  </div>
                </RevealBox>

                {/* Bottom Card Footer */}
                <div className="px-3 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/70 rounded-b-xl border-t border-slate-800">
                  <span className="text-slate-300 font-medium">B.Tech AI & ML · 2nd Year</span>
                  <span className="text-cyan-400 font-mono tracking-wider">MIPS KANPUR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Oversized Bold Typography & Identity */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          {/* Greeting kicker */}
          <RevealBox id="hero-greeting" className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-red-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
              HI, I'M
            </span>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-medium">
              <MapPin className="w-3 h-3 text-red-400" />
              <span>India</span>
            </div>
          </RevealBox>

          {/* Oversized Bold Name: VINAYAK SHUKLA */}
          <RevealBox id="hero-name" className="space-y-1">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.98] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              VINAYAK{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400 filter drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
                SHUKLA
              </span>
            </h1>
          </RevealBox>

          {/* Professional Title: ASPIRING AI/ML DEVELOPER */}
          <RevealBox id="hero-title">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-950/60 to-cyan-950/60 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <h2 className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl text-cyan-300 tracking-wider uppercase">
                ASPIRING AI/ML DEVELOPER
              </h2>
            </div>
          </RevealBox>

          {/* Short Tagline */}
          <RevealBox id="hero-tagline">
            <p className="font-mono text-sm sm:text-base md:text-lg text-slate-200 tracking-wide font-medium flex items-center gap-2.5">
              <span className="text-red-500 font-bold">"</span>
              <span>Learning, Experimenting & Building Intelligent Solutions.</span>
              <span className="text-cyan-400 font-bold">"</span>
            </p>
          </RevealBox>

          {/* Supporting Introduction */}
          <RevealBox id="hero-intro">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              A Computer Science student passionate about Artificial Intelligence, Machine Learning, and building
              practical real-world solutions. Continuously improving technical problem-solving and exploring
              autonomous intelligent systems.
            </p>
          </RevealBox>

          {/* Technical Highlights */}
          <RevealBox id="hero-highlights" className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400">
            <span className="text-slate-200 font-medium">B.Tech CSE (AI & ML)</span>
            <span className="text-red-500 font-bold">/</span>
            <span className="text-slate-300">2nd Year</span>
            <span className="text-red-500 font-bold">/</span>
            <span className="text-slate-300">MIPS Kanpur</span>
            <span className="text-red-500 font-bold">/</span>
            <span className="text-cyan-400 font-medium">Python & Machine Learning</span>
          </RevealBox>

          {/* Action CTAs */}
          <RevealBox id="hero-cta-buttons" className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.65)] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400/80 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Contact Me</span>
            </button>
          </RevealBox>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center relative z-10">
        <button
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll down to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-red-500 transition-colors">
            <span className="w-1 h-2 rounded-full bg-red-500 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
