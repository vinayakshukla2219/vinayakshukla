import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, MapPin, Building, ShieldCheck, ZoomIn } from 'lucide-react';
import { Lightbox } from './Lightbox.tsx';
import { RevealBox } from './RevealBox.tsx';

export const Achievements: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const certData = {
    title: 'Certificate of Completion — Generative & Agentic AI',
    recipient: 'Vinayak Shukla',
    workshop: 'Generative & Agentic AI (02 Days Offline Workshop)',
    duration: '02 Days Offline Intensive',
    dates: '10th – 11th October 2026',
    location: 'IIT Kanpur, Uttar Pradesh, India',
    conductedBy: 'EduTech Life in association with Udghosh, IIT Kanpur',
    certificateId: 'ETL-UDG-GAI-2026106109',
    imageSrc: '/assets/aistudio/494c2290-c6dc-4d9b-b245-6b53141443c6_0a0b3751.jpg',
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <RevealBox id="achievements-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Verified Milestones & Credentials
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            LEARNING & <span className="text-cyan-400">ACHIEVEMENTS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Formal certifications and specialized offline workshop completions advancing my knowledge in Generative AI,
            autonomous agents, and machine learning architectures.
          </p>
        </RevealBox>

        {/* Certificate Glass Showcase Card */}
        <RevealBox id="cert-showcase" className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090e] border border-slate-800 p-6 md:p-10 shadow-2xl relative overflow-hidden group">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Certificate Thumbnail & Enlarge Action */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                data-cursor-target="cert-thumbnail"
                onClick={() => setLightboxOpen(true)}
                className="relative cursor-pointer group/thumb rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl max-w-xs sm:max-w-sm transition-transform duration-300 hover:scale-[1.02] hover:border-red-500/60"
              >
                <img
                  src={certData.imageSrc}
                  alt={certData.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter brightness-[1.02] contrast-[1.03]"
                />

                {/* Hover overlay with zoom prompt */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 backdrop-blur-xs">
                  <div className="p-3 rounded-full bg-red-600 text-white shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    Click to View Full Certificate
                  </span>
                </div>

                {/* Verified Badge Overlay */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Metadata & Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div data-cursor-target="cert-title-block" className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-red-400 uppercase tracking-wider font-semibold">
                  <Award className="w-4 h-4 text-red-500" />
                  <span>Workshop Certification</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Generative & Agentic AI
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Successfully completed an intensive two-day offline technical workshop exploring the principles of
                  Generative AI, multimodal agent architectures, prompt engineering, and intelligent agent workflows.
                </p>
              </div>

              {/* Credential Data Table (Tabular unboxed metadata) */}
              <div data-cursor-target="cert-details-grid" className="space-y-3 pt-2 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-slate-400 text-[10px] uppercase">Recipient</span>
                    <div className="text-white font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{certData.recipient}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-slate-400 text-[10px] uppercase">Conducted By</span>
                    <div className="text-white font-semibold text-wrap-balance">
                      EduTech Life in assoc. with Udghosh
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-slate-400 text-[10px] uppercase">Venue & Location</span>
                    <div className="text-cyan-300 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>IIT Kanpur</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-slate-400 text-[10px] uppercase">Dates & Duration</span>
                    <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>10th – 11th Oct 2026 (02 Days)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 uppercase text-[10px]">Certificate ID:</span>
                    <span className="text-slate-200 font-bold select-all tracking-wider">
                      {certData.certificateId}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    MSME & ISO 9001:2015 Certified Organization
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  data-cursor-target="cert-enlarge-btn"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge Certificate</span>
                </button>

                <span className="text-xs font-mono text-slate-500">
                  Note: Offline workshop conducted at IIT Kanpur
                </span>
              </div>
            </div>
          </div>
        </RevealBox>
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={certData.imageSrc}
        title={certData.title}
        meta={`ID: ${certData.certificateId} · Issued at IIT Kanpur`}
        caption="Certificate of Completion awarded to Vinayak Shukla for the 2-day offline Generative & Agentic AI workshop conducted by EduTech Life in association with Udghosh, IIT Kanpur."
      />
    </section>
  );
};
