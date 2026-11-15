import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ShieldCheck, Cpu, Sparkles, X, ChevronRight, Terminal } from 'lucide-react';
import { Project } from '../types.ts';
import { RevealBox } from './RevealBox.tsx';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'diga-ai',
      title: 'DIGA AI',
      badge: 'Autonomous Systems & Accessibility',
      tagline: 'AI for Digital Independence & Assistive Operations',
      description:
        'An AI-focused initiative engineered to empower users with greater digital independence through intelligent multimodal assistance, automated desktop workflows, and assistive accessibility heuristics.',
      architectureDetails: [
        'Multi-agent task decomposition for user assistance and autonomy',
        'Natural language intent interpretation to OS action mapping',
        'Privacy-first on-device telemetry and local inference roadmap',
        'Accessible voice & visual feedback interfaces for enhanced autonomy',
      ],
      techStack: ['Python', 'Machine Learning', 'Computer Vision', 'Assistive AI'],
      status: 'In Development',
      statusColor: 'cyan',
      category: 'Autonomous Systems',
    },
    {
      id: 'terraguard-ai',
      title: 'TerraGuard AI',
      badge: 'Environmental Intelligence',
      tagline: 'Automated Environmental Monitoring & Anomaly Detection',
      description:
        'An AI-focused platform designed for ecological surveillance, environmental anomaly detection, and predictive analysis of ecological parameters using machine learning models and spatial sensor telemetry.',
      architectureDetails: [
        'Multi-sensor time-series feature engineering and anomaly clustering',
        'Spatial environmental degradation pattern identification',
        'Predictive risk indices for microclimate and habitat shifts',
        'Automated reporting pipelines for environmental monitoring teams',
      ],
      techStack: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'Data Pipelines'],
      status: 'Exploration & Prototyping',
      statusColor: 'red',
      category: 'AI & Environmental Intelligence',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <RevealBox id="projects-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Research & Implementations
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Key intelligent systems and software architectures I am actively building, exploring, and prototyping.
            Each project is built around real-world problem solving and machine learning applications.
          </p>
        </RevealBox>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isRed = project.statusColor === 'red';

            return (
              <RevealBox
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090e] border border-slate-800 p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all"
              >
                {/* Top Subtle Ambient Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35 ${
                    isRed ? 'bg-red-500' : 'bg-cyan-500'
                  }`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Status & Category Bar */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">{project.badge}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isRed ? 'bg-red-500 animate-pulse' : 'bg-cyan-400 animate-pulse'
                        }`}
                      />
                      <span className={isRed ? 'text-red-400 font-medium' : 'text-cyan-300 font-medium'}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Visual Project Graphic / Placeholder Container */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 group-hover:border-slate-700 transition-colors flex items-center justify-center p-6 text-center">
                    {/* Cyber Grid Lines */}
                    <div className="absolute inset-0 bg-grid-cyber opacity-40" />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 opacity-20 ${
                        isRed
                          ? 'bg-gradient-to-tr from-red-950 via-slate-950 to-transparent'
                          : 'bg-gradient-to-tr from-cyan-950 via-slate-950 to-transparent'
                      }`}
                    />

                    {/* Placeholder Content with Cinematic Blueprint Graphics */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl border ${
                          isRed
                            ? 'bg-red-500/10 border-red-500/30 text-red-400'
                            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        }`}
                      >
                        {isRed ? <Cpu className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
                      </div>
                      <div className="space-y-1">
                        <div className="font-display font-bold text-xl text-white tracking-wide">
                          {project.title}
                        </div>
                        <div className="font-mono text-[11px] text-slate-400 tracking-wider uppercase">
                          System Blueprint · Active Development
                        </div>
                      </div>
                    </div>

                    {/* Corner Crosshair Accents */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-600" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-600" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-600" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-600" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-red-400 font-medium">{project.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Confirmed Tech Stack (Unboxed text with separators, zero pill clutter) */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Confirmed Technologies
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                      {project.techStack.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-200">{tech}</span>
                          {i < project.techStack.length - 1 && (
                            <span className="text-slate-600 font-bold">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 relative z-10">
                  <button
                    data-cursor-target={`project-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-bold text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Honest GitHub Placeholder as requested */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Github className="w-4 h-4 text-slate-600" />
                    <span>Repo Initializing</span>
                  </div>
                </div>
              </RevealBox>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            data-cursor-target="project-modal-container"
            className="relative w-full max-w-2xl rounded-2xl bg-[#090b10] border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                  {selectedProject.badge}
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                data-cursor-target="project-modal-close"
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-5">
              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3">
                  Architecture & Planned Capabilities
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">
                  Confirmed Technologies
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>Development Notice</span>
                </div>
                <p className="text-slate-400">
                  This project is currently in exploration and development by Vinayak Shukla. Detailed benchmark
                  data and official GitHub repository links will be published upon initial stable release.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                data-cursor-target="project-modal-bottom-close"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
