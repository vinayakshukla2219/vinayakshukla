import React, { useState } from 'react';
import { Camera, ZoomIn, Quote, Sparkles, MapPin, Calendar, HeartHandshake } from 'lucide-react';
import { Lightbox } from './Lightbox.tsx';
import { RevealBox } from './RevealBox.tsx';

export const JourneyGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const photoData = {
    title: 'Offline Workshop Experience — Generative & Agentic AI at IIT Kanpur',
    caption:
      'Grateful for the opportunity to complete a two-day offline workshop on Generative & Agentic AI at IIT Kanpur. A valuable learning experience and an opportunity to explore emerging AI technologies.',
    event: 'Generative & Agentic AI Offline Workshop',
    venue: 'IIT Kanpur',
    dates: '10th – 11th October 2026',
    imageSrc: '/assets/aistudio/6c95a4e3-47bd-43da-93e1-69fd3ccd70ce_a1b9af97.jpg',
  };

  return (
    <section id="journey" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <RevealBox id="journey-section" className="space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-500 rounded-full" />
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                Field Experience & Mentorship
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
              MY LEARNING <span className="text-cyan-400">JOURNEY</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Moments from hands-on offline workshops, collaborative technical environments, and active exploration of
              emerging artificial intelligence systems.
            </p>
          </div>

          {/* Gallery Feature Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090e] border border-slate-800 p-6 md:p-8 shadow-2xl relative overflow-hidden group">
          {/* Subtle Ambient Lights */}
          <div className="absolute -top-10 left-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Media Container with Zoom Trigger */}
            <div className="lg:col-span-7">
              <div
                data-cursor-target="journey-photo"
                onClick={() => setLightboxOpen(true)}
                className="relative cursor-pointer group/photo rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl transition-all duration-300 hover:border-cyan-400/60"
              >
                <img
                  src={photoData.imageSrc}
                  alt={photoData.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[500px] object-cover object-center filter brightness-[1.01] contrast-[1.02] transition-transform duration-500 group-hover/photo:scale-[1.015]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 backdrop-blur-xs">
                  <div className="p-3 rounded-full bg-cyan-500 text-slate-950 shadow-lg font-bold">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    Click to View Full Workshop Moment
                  </span>
                </div>

                {/* Bottom Bar Tag */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>IIT Kanpur Campus</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-cyan-400">Offline Session</span>
                </div>
              </div>
            </div>

            {/* Narrative & Caption Card */}
            <div className="lg:col-span-5 space-y-6">
              <div data-cursor-target="journey-quote-box" className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400">
                  <HeartHandshake className="w-4 h-4 text-red-500" />
                  <span>Mentorship & In-Person Immersion</span>
                </div>

                <div className="relative pl-6 border-l-2 border-red-500/80 py-1 space-y-3">
                  <Quote className="w-6 h-6 text-red-500/40" />
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light italic">
                    "{photoData.caption}"
                  </p>
                  <div className="font-mono text-xs text-cyan-400 font-semibold">— Vinayak Shukla</div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-2.5 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 uppercase text-[10px]">Event:</span>
                  <span className="font-semibold text-white">Generative & Agentic AI Workshop</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 uppercase text-[10px]">Location:</span>
                  <span className="font-semibold text-cyan-400">IIT Kanpur, India</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 uppercase text-[10px]">Duration:</span>
                  <span className="font-semibold text-slate-200">10th – 11th October 2026</span>
                </div>
              </div>

              {/* Enlarge Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-white transition-all cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                  <span>View Full Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealBox>
    </div>

      {/* Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={photoData.imageSrc}
        title={photoData.title}
        meta="IIT Kanpur · 10th-11th October 2026"
        caption={photoData.caption}
      />
    </section>
  );
};
