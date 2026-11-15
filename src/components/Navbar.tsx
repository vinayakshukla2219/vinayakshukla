import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050608]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <RevealBox id="nav-bar" className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <button
          onClick={() => scrollTo('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <span className="font-mono text-xs tracking-widest text-red-500 uppercase font-semibold mr-1.5">
            VS //
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            VINAYAK SHUKLA
          </span>
        </button>

        {/* Zone 2: 5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'achievements', label: 'Achievements' },
          ].map((item) => (
            <button
              key={item.id}
              data-cursor-target={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className={`transition-colors whitespace-nowrap cursor-pointer hover:text-white relative py-1 ${
                activeSection === item.id ? 'text-red-400 font-semibold' : 'text-slate-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-cyan-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            data-cursor-target="nav-contact"
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase text-white bg-slate-900 border border-red-500/40 rounded-lg hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </RevealBox>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm uppercase">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'skills', label: 'Technical Skills' },
              { id: 'projects', label: 'Featured Projects' },
              { id: 'achievements', label: 'Achievements & Journey' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 px-3 rounded text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-2.5 px-4 text-center text-xs font-mono uppercase font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
