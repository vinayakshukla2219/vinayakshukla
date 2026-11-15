import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-slate-900 bg-[#040507] relative z-10">
      <RevealBox id="footer-content" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="font-display font-bold text-white text-base tracking-tight">
            Designed & Built by Vinayak Shukla
          </div>
          <div className="font-mono text-xs text-red-400">
            Exploring AI. Building Possibilities.
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href="https://www.linkedin.com/in/vinayak-shukla-927734381/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:vinayakshukla0707@gmail.com"
            className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </RevealBox>
    </footer>
  );
};
