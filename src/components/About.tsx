import React from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen, Compass, Trophy } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <RevealBox id="about-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Background & Focus
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
        </RevealBox>

        {/* 2-Column Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Portrait Focus & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#07090e] border border-slate-800 p-6 shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-5">
                {/* Visual Portrait Vignette */}
                <RevealBox id="about-portrait" direction="vertical" className="flex items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-red-500/40 p-0.5 bg-slate-900 shrink-0">
                    <img
                      src="/assets/aistudio/ef5bc4bf-5bd5-4c8b-bed7-d24d865c65a4_9b61a07f.jpg"
                      alt="Vinayak Shukla"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Vinayak Shukla</h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>Kanpur, India</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-cyan-400">Student Developer</span>
                    </div>
                  </div>
                </RevealBox>

                {/* Education Highlight */}
                <RevealBox id="about-education-card" className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 tracking-wider">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-slate-200">Formal Academic Education</span>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800/80 space-y-2">
                    <div className="text-sm font-semibold text-white">
                      B.Tech in Computer Science and Engineering
                    </div>
                    <div className="text-xs font-mono text-red-400 font-medium">
                      Specialization: Artificial Intelligence & Machine Learning
                    </div>
                    <div className="text-xs text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/50">
                      <span>Maharana Institute of Professional Studies, Kanpur</span>
                      <span className="text-slate-200 font-mono font-medium">2nd Year</span>
                    </div>
                  </div>
                </RevealBox>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="text-slate-400 text-[10px] uppercase">Primary Track</div>
                    <div className="text-slate-200 font-semibold mt-0.5">AI & ML Solutions</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="text-slate-400 text-[10px] uppercase">IIT Kanpur Workshop</div>
                    <div className="text-cyan-400 font-semibold mt-0.5">Generative AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Mindset, and Qualities */}
          <div className="lg:col-span-7 space-y-8">
            <RevealBox id="about-intro-text" className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">
                Exploring Intelligence. Engineering Solutions.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                "I am a Computer Science student passionate about Artificial Intelligence, Machine Learning, and building
                real-world solutions. I enjoy exploring emerging technologies, learning new tools, and turning ideas
                into practical projects. I am continuously improving my technical and problem-solving skills."
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently focused on hands-on exploration of algorithms, data manipulation with NumPy and Pandas,
                autonomous AI concepts, and core engineering fundamentals in Python, C, and Java.
              </p>
            </RevealBox>

            {/* Core Qualities & Mindset */}
            <RevealBox id="about-qualities-grid" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span className="font-semibold text-slate-200">Personal Qualities & Approach</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Curious & Inquisitive',
                    desc: 'Driven by how neural models, agents, and systems function under the hood.',
                  },
                  {
                    title: 'Dedicated & Disciplined',
                    desc: 'Committed to steady daily coding, theory comprehension, and engineering practice.',
                  },
                  {
                    title: 'Fast Learner',
                    desc: 'Quickly absorbing documentation, modern AI toolsets, and new programming paradigms.',
                  },
                  {
                    title: 'Passionate Problem Solver',
                    desc: 'Translating complex real-world challenges into structured, computational logic.',
                  },
                ].map((q) => (
                  <div
                    key={q.title}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{q.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            </RevealBox>

            {/* Personal Interests */}
            <RevealBox id="about-interests" className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-slate-200">Personal Interests & Hobbies</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  Machine Learning
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  Emerging Technology
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  🏏 Cricket
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  ♟️ Chess (Strategic Thinking)
                </span>
              </div>
            </RevealBox>
          </div>
        </div>
      </div>
    </section>
  );
};
