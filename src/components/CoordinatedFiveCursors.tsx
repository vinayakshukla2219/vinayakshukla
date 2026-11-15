import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';
import { useReveal } from '../context/RevealContext.tsx';

interface CursorTask {
  targetId: string;
  direction: 'horizontal' | 'vertical';
  duration: number;
}

interface MultiCursorStage {
  section: string;
  title: string;
  scrollTargetId?: string;
  tasks: [CursorTask, CursorTask, CursorTask, CursorTask, CursorTask];
}

interface CursorDef {
  id: string;
  color: string;
  accentGlow: string;
}

const CURSOR_DEFS: readonly CursorDef[] = [
  { id: 'c1', color: '#06b6d4', accentGlow: 'rgba(6, 182, 212, 0.85)' }, // Cyan
  { id: 'c2', color: '#ef4444', accentGlow: 'rgba(239, 68, 68, 0.85)' }, // Coral Red
  { id: 'c3', color: '#10b981', accentGlow: 'rgba(16, 185, 129, 0.85)' }, // Emerald
  { id: 'c4', color: '#f59e0b', accentGlow: 'rgba(245, 158, 11, 0.85)' }, // Amber Gold
  { id: 'c5', color: '#a855f7', accentGlow: 'rgba(168, 85, 247, 0.85)' }, // Electric Purple
];

// Coordinated Simultaneous Stages
// In each stage, all 5 cursors simultaneously inspect and reveal 5 distinct elements across the portfolio
const STAGES: readonly MultiCursorStage[] = [
  // Stage 1: Hero Primary (The 5 cursors work simultaneously on 5 distinct core hero elements)
  {
    section: 'Hero',
    title: 'Profile Portrait, Name, Title & Vision',
    tasks: [
      { targetId: 'hero-portrait', direction: 'vertical', duration: 1250 }, // Cursor 1 reveals Vinayak's authentic portrait photo
      { targetId: 'hero-name', direction: 'horizontal', duration: 1100 },     // Cursor 2 reveals VINAYAK SHUKLA
      { targetId: 'hero-title', direction: 'horizontal', duration: 1050 },    // Cursor 3 reveals ASPIRING AI/ML DEVELOPER
      { targetId: 'hero-tagline', direction: 'horizontal', duration: 950 },   // Cursor 4 reveals Vision Tagline
      { targetId: 'hero-greeting', direction: 'horizontal', duration: 900 },  // Cursor 5 reveals Greeting & Status
    ],
  },

  // Stage 2: Hero Secondary & Navigation Menu
  {
    section: 'Hero',
    title: 'Biography, Highlights, CTAs & Navbar',
    tasks: [
      { targetId: 'nav-bar', direction: 'horizontal', duration: 900 },
      { targetId: 'hero-intro', direction: 'horizontal', duration: 1000 },
      { targetId: 'hero-highlights', direction: 'horizontal', duration: 950 },
      { targetId: 'hero-cta-buttons', direction: 'horizontal', duration: 900 },
      { targetId: 'hero-portrait', direction: 'vertical', duration: 800 },
    ],
  },

  // Stage 3: About Me (Simultaneous sweep across portrait thumbnail, education, and bio)
  {
    section: 'About',
    title: 'Background, Education & Core Qualities',
    scrollTargetId: 'about',
    tasks: [
      { targetId: 'about-portrait', direction: 'vertical', duration: 950 },
      { targetId: 'about-heading', direction: 'horizontal', duration: 800 },
      { targetId: 'about-intro-text', direction: 'horizontal', duration: 1100 },
      { targetId: 'about-education-card', direction: 'horizontal', duration: 1000 },
      { targetId: 'about-qualities-grid', direction: 'horizontal', duration: 1000 },
    ],
  },

  // Stage 4: About Interests & Personality
  {
    section: 'About',
    title: 'Passions, Mindset & Analytical Interests',
    tasks: [
      { targetId: 'about-interests', direction: 'horizontal', duration: 950 },
      { targetId: 'about-intro-text', direction: 'horizontal', duration: 850 },
      { targetId: 'about-qualities-grid', direction: 'horizontal', duration: 900 },
      { targetId: 'about-education-card', direction: 'horizontal', duration: 850 },
      { targetId: 'about-heading', direction: 'horizontal', duration: 800 },
    ],
  },

  // Stage 5: Technical Skills (Simultaneous inspection across skill domains)
  {
    section: 'Skills',
    title: 'Languages, AI/ML, Web & Core Foundations',
    scrollTargetId: 'skills',
    tasks: [
      { targetId: 'skills-heading', direction: 'horizontal', duration: 800 },
      { targetId: 'skills-tabs', direction: 'horizontal', duration: 850 },
      { targetId: 'skill-category-programming', direction: 'horizontal', duration: 1150 },
      { targetId: 'skill-category-ai', direction: 'horizontal', duration: 1150 },
      { targetId: 'skill-category-web', direction: 'horizontal', duration: 1050 },
    ],
  },

  // Stage 6: Skills Mastery & CS Foundations
  {
    section: 'Skills',
    title: 'Data Structures, Algorithms & Tooling',
    tasks: [
      { targetId: 'skill-category-core', direction: 'horizontal', duration: 1000 },
      { targetId: 'skill-category-programming', direction: 'horizontal', duration: 850 },
      { targetId: 'skill-category-ai', direction: 'horizontal', duration: 900 },
      { targetId: 'skills-tabs', direction: 'horizontal', duration: 800 },
      { targetId: 'skill-category-web', direction: 'horizontal', duration: 850 },
    ],
  },

  // Stage 7: Featured AI Projects (Simultaneous inspection across DIGA AI & TerraGuard AI)
  {
    section: 'Projects',
    title: 'DIGA AI & TerraGuard AI Projects',
    scrollTargetId: 'projects',
    tasks: [
      { targetId: 'projects-heading', direction: 'horizontal', duration: 800 },
      { targetId: 'project-card-diga-ai', direction: 'horizontal', duration: 1250 },
      { targetId: 'project-card-diga-ai', direction: 'vertical', duration: 1250 },
      { targetId: 'project-card-terraguard-ai', direction: 'horizontal', duration: 1250 },
      { targetId: 'project-card-terraguard-ai', direction: 'vertical', duration: 1250 },
    ],
  },

  // Stage 8: Education & Credentials (IIT Kanpur GenAI Certificate & Workshop Photo with Mentor)
  {
    section: 'Education',
    title: 'IIT Kanpur Certificate & Workshop Experience',
    scrollTargetId: 'achievements',
    tasks: [
      { targetId: 'achievements-heading', direction: 'horizontal', duration: 800 },
      { targetId: 'cert-showcase', direction: 'horizontal', duration: 1200 },
      { targetId: 'cert-showcase', direction: 'vertical', duration: 1150 },
      { targetId: 'journey-section', direction: 'horizontal', duration: 1200 },
      { targetId: 'journey-section', direction: 'vertical', duration: 1150 },
    ],
  },

  // Stage 9: Contact & Communication Channels
  {
    section: 'Contact',
    title: 'Email, LinkedIn, Message Form & Footer',
    scrollTargetId: 'contact',
    tasks: [
      { targetId: 'contact-heading', direction: 'horizontal', duration: 800 },
      { targetId: 'contact-email-card', direction: 'horizontal', duration: 1000 },
      { targetId: 'contact-linkedin-card', direction: 'horizontal', duration: 1000 },
      { targetId: 'contact-form-card', direction: 'horizontal', duration: 1100 },
      { targetId: 'footer-content', direction: 'horizontal', duration: 850 },
    ],
  },
];

interface CursorState {
  x: number;
  y: number;
  active: boolean;
}

export const CoordinatedFiveCursors: React.FC = () => {
  const {
    setProgress,
    completeReveal,
    resetTour,
    isPlaying,
    pauseTour,
    resumeTour,
    tourCompleted,
    setTourCompleted,
  } = useReveal();

  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [pulseRipples, setPulseRipples] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  // Persistent 5 Cursor positions across frames
  const cursorCoordsRef = useRef<CursorState[]>([
    { x: typeof window !== 'undefined' ? window.innerWidth * 0.22 : 200, y: 160, active: true },
    { x: typeof window !== 'undefined' ? window.innerWidth * 0.52 : 450, y: 140, active: true },
    { x: typeof window !== 'undefined' ? window.innerWidth * 0.65 : 600, y: 220, active: true },
    { x: typeof window !== 'undefined' ? window.innerWidth * 0.78 : 720, y: 310, active: true },
    { x: typeof window !== 'undefined' ? window.innerWidth * 0.40 : 360, y: 110, active: true },
  ]);

  const [cursorPositions, setCursorPositions] = useState<CursorState[]>(cursorCoordsRef.current);

  const stageIdxRef = useRef(0);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const animFrameIdRef = useRef<number | null>(null);
  const activeTimersRef = useRef<number[]>([]);

  const clearAllTimers = () => {
    activeTimersRef.current.forEach((t) => clearTimeout(t));
    activeTimersRef.current = [];
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
  };

  const triggerPulse = (x: number, y: number, color: string) => {
    const id = Date.now() + Math.random();
    setPulseRipples((prev) => [...prev.slice(-6), { id, x, y, color }]);
    const timer = window.setTimeout(() => {
      setPulseRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    activeTimersRef.current.push(timer);
  };

  // Execute a coordinated stage where all 5 cursors sweep 5 distinct elements simultaneously
  const executeStage = useCallback((stageIdx: number) => {
    if (stageIdx >= STAGES.length) {
      setTourCompleted(true);
      return;
    }

    stageIdxRef.current = stageIdx;
    setCurrentStageIdx(stageIdx);

    const stage = STAGES[stageIdx];

    // Check for automatic downward scroll when switching sections
    if (stage.scrollTargetId) {
      const scrollEl = document.getElementById(stage.scrollTargetId);
      if (scrollEl) {
        const rect = scrollEl.getBoundingClientRect();
        const targetScrollY = window.pageYOffset + rect.top - 90;
        window.scrollTo({
          top: Math.max(0, targetScrollY),
          behavior: 'smooth',
        });
      }
    }

    // Maximum duration watchdog for this stage
    const maxDuration = Math.max(...stage.tasks.map((t) => t.duration));
    const watchdogTimer = window.setTimeout(() => {
      if (stageIdxRef.current === stageIdx && isPlayingRef.current) {
        stage.tasks.forEach((t) => completeReveal(t.targetId));
        executeStage(stageIdx + 1);
      }
    }, maxDuration + 1400);
    activeTimersRef.current.push(watchdogTimer);

    // Wait 90ms for scroll to begin smoothly, then calculate 5 simultaneous bounding targets
    const startTimer = window.setTimeout(() => {
      if (!isPlayingRef.current) return;

      interface CursorRoute {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
        fromX: number;
        fromY: number;
        task: CursorTask;
      }

      const routes: (CursorRoute | null)[] = stage.tasks.map((task, i) => {
        const el = document.querySelector(`[data-cursor-target="${task.targetId}"]`);
        if (!el) {
          completeReveal(task.targetId);
          return null;
        }

        const rect = el.getBoundingClientRect();
        let sX: number;
        let sY: number;
        let eX: number;
        let eY: number;

        if (task.direction === 'vertical') {
          sX = rect.left + rect.width * 0.5;
          sY = rect.top + 6;
          eX = rect.left + rect.width * 0.5;
          eY = rect.bottom - 6;
        } else {
          sX = rect.left + 8;
          sY = rect.top + rect.height * 0.5;
          eX = rect.right - 8;
          eY = rect.top + rect.height * 0.5;
        }

        // Clamp to screen viewport
        sX = Math.max(20, Math.min(window.innerWidth - 20, sX));
        sY = Math.max(20, Math.min(window.innerHeight - 20, sY));
        eX = Math.max(20, Math.min(window.innerWidth - 20, eX));
        eY = Math.max(20, Math.min(window.innerHeight - 20, eY));

        return {
          startX: sX,
          startY: sY,
          endX: eX,
          endY: eY,
          fromX: cursorCoordsRef.current[i].x,
          fromY: cursorCoordsRef.current[i].y,
          task,
        };
      });

      // Phase 1: Transit all 5 cursors simultaneously from current positions to their designated element start edges
      const transitDuration = 340;
      const transitStart = performance.now();

      const transitLoop = (now: number) => {
        if (!isPlayingRef.current) return;
        const p = Math.min((now - transitStart) / transitDuration, 1);
        // Smooth natural ease-in-out cubic
        const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

        const updated = cursorCoordsRef.current.map((c, i) => {
          const r = routes[i];
          if (!r) return c;
          return {
            x: r.fromX + (r.startX - r.fromX) * eased,
            y: r.fromY + (r.startY - r.fromY) * eased,
            active: true,
          };
        });

        cursorCoordsRef.current = updated;
        setCursorPositions(updated);

        if (p < 1) {
          animFrameIdRef.current = requestAnimationFrame(transitLoop);
        } else {
          // Phase 2: Active Simultaneous Multi-Element Sweep across all 5 targets
          const sweepStart = performance.now();

          const sweepLoop = (sNow: number) => {
            if (!isPlayingRef.current) return;
            const elapsed = sNow - sweepStart;

            let allFinished = true;

            const nextPositions = cursorCoordsRef.current.map((c, i) => {
              const r = routes[i];
              if (!r) return c;

              const progress = Math.min(elapsed / r.task.duration, 1);
              if (progress < 1) {
                allFinished = false;
              }

              // Update progressive reveal clip-path mask for this specific target
              setProgress(r.task.targetId, progress);

              // Position cursor along element trajectory with subtle natural curve
              const curX = r.startX + (r.endX - r.startX) * progress;
              const curY = r.startY + (r.endY - r.startY) * progress;

              return {
                x: curX,
                y: curY,
                active: true,
              };
            });

            cursorCoordsRef.current = nextPositions;
            setCursorPositions(nextPositions);

            if (!allFinished) {
              animFrameIdRef.current = requestAnimationFrame(sweepLoop);
            } else {
              // Phase 3: Stage Complete - All 5 targets finalized
              stage.tasks.forEach((t, i) => {
                completeReveal(t.targetId);
                const r = routes[i];
                if (r) {
                  triggerPulse(r.endX, r.endY, CURSOR_DEFS[i].color);
                }
              });

              const nextStageTimer = window.setTimeout(() => {
                if (!isPlayingRef.current) return;
                executeStage(stageIdx + 1);
              }, 140);
              activeTimersRef.current.push(nextStageTimer);
            }
          };

          animFrameIdRef.current = requestAnimationFrame(sweepLoop);
        }
      };

      animFrameIdRef.current = requestAnimationFrame(transitLoop);
    }, 90);

    activeTimersRef.current.push(startTimer);
  }, [completeReveal, setProgress, setTourCompleted]);

  // Launch on mount
  useEffect(() => {
    const startTimeout = window.setTimeout(() => {
      executeStage(0);
    }, 200);
    activeTimersRef.current.push(startTimeout);

    // Passive listener to detect user scroll and pause gracefully without clearing content
    const handleScroll = (e: Event) => {
      if (e.isTrusted && isPlayingRef.current) {
        pauseTour();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      clearAllTimers();
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [executeStage, pauseTour]);

  // Controls
  const handleTogglePlay = () => {
    if (isPlaying) {
      clearAllTimers();
      pauseTour();
    } else {
      resumeTour();
      executeStage(stageIdxRef.current);
    }
  };

  const handleReplay = () => {
    clearAllTimers();
    resetTour();
    cursorCoordsRef.current = [
      { x: window.innerWidth * 0.22, y: 160, active: true },
      { x: window.innerWidth * 0.52, y: 140, active: true },
      { x: window.innerWidth * 0.65, y: 220, active: true },
      { x: window.innerWidth * 0.78, y: 310, active: true },
      { x: window.innerWidth * 0.40, y: 110, active: true },
    ];
    setCursorPositions(cursorCoordsRef.current);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const restartTimer = window.setTimeout(() => {
      executeStage(0);
    }, 220);
    activeTimersRef.current.push(restartTimer);
  };

  const activeStage = STAGES[currentStageIdx] || STAGES[0];

  return (
    <>
      {/* 1. Pulse Ripples Emitted on Simultaneous Item Completions */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
        {pulseRipples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full animate-ping pointer-events-none"
            style={{
              left: ripple.x - 18,
              top: ripple.y - 18,
              width: 36,
              height: 36,
              border: `2px solid ${ripple.color}`,
              backgroundColor: `${ripple.color}33`,
            }}
          />
        ))}
      </div>

      {/* 2. Exactly Five Synchronized Mouse Cursors Interacting with Different Elements Simultaneously */}
      {/* Strict Rule: Clean realistic cursor pointers only - NO names, NO agent badges, NO identification text */}
      {!tourCompleted && (
        <div
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
          aria-hidden="true"
        >
          {CURSOR_DEFS.map((def, idx) => {
            const pos = cursorPositions[idx] || cursorCoordsRef.current[idx];

            return (
              <div
                key={def.id}
                className="absolute left-0 top-0 will-change-transform select-none"
                style={{
                  transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                  transition: 'none',
                }}
              >
                {/* Realistic Computer Mouse Pointer Arrow SVG */}
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] filter"
                >
                  <path
                    d="M1 1L1 21.5L6.2 16.5L10.5 25.5L14 23.8L9.5 15L16.5 15L1 1Z"
                    fill="#ffffff"
                    stroke="#050608"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 4L3 18L6.5 14.5L10 21.5L11.5 20.8L8 13.8L13 13.8L3 4Z"
                    fill={def.color}
                    opacity="0.55"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. Five-Cursor Collaborative Inspection HUD */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-8 z-40 flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl text-xs font-mono select-none">
        {/* Status indicator */}
        <div className="flex items-center gap-2.5 px-2.5 py-1 text-slate-300 border-r border-slate-800">
          <span
            className={`w-2 h-2 rounded-full ${
              tourCompleted
                ? 'bg-emerald-400'
                : isPlaying
                ? 'bg-cyan-400 animate-pulse'
                : 'bg-amber-400'
            }`}
          />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 font-semibold flex items-center gap-1.5">
              <span>
                {tourCompleted
                  ? 'All Information Revealed'
                  : `5 Cursors Sync: ${activeStage.section} (${currentStageIdx + 1}/${STAGES.length})`}
              </span>
              {tourCompleted ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              ) : (
                <Sparkles className="w-3 h-3 text-cyan-400" />
              )}
            </span>
            <span className="text-[11px] text-white font-bold tracking-tight max-w-[180px] sm:max-w-xs truncate">
              {tourCompleted ? '5-Cursor Inspection Complete' : activeStage.title}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {!tourCompleted && (
            <button
              onClick={handleTogglePlay}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Presentation' : 'Resume Presentation'}
              aria-label={isPlaying ? 'Pause' : 'Resume'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          )}

          <button
            onClick={handleReplay}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors cursor-pointer"
            title="Replay 5-Cursor Experience from Beginning"
            aria-label="Replay Experience"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};
