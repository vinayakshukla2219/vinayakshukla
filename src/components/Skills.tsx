import React, { useState } from 'react';
import { Terminal, Brain, Code, Cpu, Database, Flame, Layers } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'programming' | 'web' | 'core'>('all');

  const categories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: Terminal,
      tagline: 'Computational Logic & Systems Foundations',
      accentColor: 'blue',
      items: [
        {
          name: 'Python',
          status: 'Primary Language',
          summary: 'Core scripting, AI/ML scripting, OOP principles, data structures, and automation.',
          focus: 'Core Development',
        },
        {
          name: 'C Programming',
          status: 'Academic Foundation',
          summary: 'Memory management, pointers, low-level data structures, and algorithm execution.',
          focus: 'Systems & Memory',
        },
        {
          name: 'Java',
          status: 'Object-Oriented Development',
          summary: 'Class hierarchies, interfaces, JVM ecosystem concepts, and clean structure.',
          focus: 'OOP & Architecture',
        },
      ],
    },
    {
      id: 'ai',
      name: 'AI & Data Science',
      icon: Brain,
      tagline: 'Core Focus & Active Exploration',
      accentColor: 'red',
      items: [
        {
          name: 'Artificial Intelligence',
          status: 'Active Exploration',
          summary: 'Foundation models, heuristics, autonomous agent logic, and search algorithms.',
          focus: 'Reasoning & Systems',
        },
        {
          name: 'Machine Learning',
          status: 'Foundations & Practice',
          summary: 'Supervised/unsupervised algorithms, evaluation metrics, model workflows.',
          focus: 'Predictive Modeling',
        },
        {
          name: 'NumPy',
          status: 'Developing',
          summary: 'Array computation, multi-dimensional tensor indexing, numerical linear algebra.',
          focus: 'Numerical Operations',
        },
        {
          name: 'Pandas',
          status: 'Developing',
          summary: 'Dataframe manipulation, dataset transformation, feature preparation, cleaning.',
          focus: 'Data Wrangling',
        },
      ],
    },
    {
      id: 'web',
      name: 'Web Technologies',
      icon: Code,
      tagline: 'Interface & Front-End Structure',
      accentColor: 'cyan',
      items: [
        {
          name: 'HTML5',
          status: 'Semantic Markup',
          summary: 'Accessible structure, DOM hierarchy, modern elements, and document semantics.',
          focus: 'Document Architecture',
        },
        {
          name: 'CSS3',
          status: 'Styling & Layouts',
          summary: 'Responsive design, Flexbox, CSS Grid, animations, and visual styling.',
          focus: 'Responsive Design',
        },
      ],
    },
    {
      id: 'core',
      name: 'Engineering Principles',
      icon: Cpu,
      tagline: 'Methodology & Problem-Solving',
      accentColor: 'red',
      items: [
        {
          name: 'Problem Solving',
          status: 'Daily Discipline',
          summary: 'Algorithmic thinking, breakdown of complex problems, edge-case analysis.',
          focus: 'Algorithmic Mindset',
        },
        {
          name: 'Continuous Learning',
          status: 'Core Habit',
          summary: 'Rapid assimilation of emerging tech papers, hands-on tutorials, and documentation.',
          focus: 'Growth & Adaptation',
        },
      ],
    },
  ];

  const filteredCategories =
    activeFilter === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <RevealBox id="skills-heading" className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-500 rounded-full" />
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                Technical Stack & Matrix
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
              SKILLS <span className="text-cyan-400">& TECHNOLOGIES</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              An honest representation of the technologies, tools, and engineering principles I am actively
              studying, practicing, and applying in my academic and personal projects.
            </p>
          </RevealBox>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <RevealBox id="skills-tabs" className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono">
            {[
              { id: 'all', label: 'All Matrix' },
              { id: 'ai', label: 'AI & Data' },
              { id: 'programming', label: 'Programming' },
              { id: 'web', label: 'Web Dev' },
              { id: 'core', label: 'Principles' },
            ].map((tab) => (
              <button
                key={tab.id}
                data-cursor-target={`skill-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </RevealBox>
        </div>

        {/* Matrix Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            const isRedAccent = cat.accentColor === 'red';

            return (
              <RevealBox
                key={cat.id}
                id={`skill-category-${cat.id}`}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090e] border border-slate-800 p-6 space-y-6 hover:border-slate-700 transition-colors shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl border ${
                        isRedAccent
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{cat.name}</h3>
                      <p className="font-mono text-xs text-slate-400">{cat.tagline}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-slate-500">
                    {cat.items.length} Modules
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      data-cursor-target={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/90 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-cyan-300">{skill.status}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">{skill.summary}</p>

                      {/* Clean typographic indicator bar (subtle visual line without fake percentages) */}
                      <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>Focus: {skill.focus}</span>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-1 rounded-full bg-red-500/80" />
                          <span className="w-4 h-1 rounded-full bg-cyan-400/80" />
                          <span className="w-8 h-1 rounded-full bg-slate-700" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealBox>
            );
          })}
        </div>
      </div>
    </section>
  );
};
