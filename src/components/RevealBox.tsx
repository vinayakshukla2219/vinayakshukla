import React from 'react';
import { useReveal } from '../context/RevealContext.tsx';

interface RevealBoxProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  direction?: 'horizontal' | 'vertical'; // 'horizontal' sweeps left-to-right (text lines), 'vertical' sweeps top-to-bottom (photos/tall cards)
}

export const RevealBox: React.FC<RevealBoxProps> = ({
  id,
  children,
  className = '',
  as: Component = 'div',
  direction = 'horizontal',
}) => {
  const { getProgress } = useReveal();
  const progress = getProgress(id);

  // When progress is 0: not yet swept by cursors
  const isUnrevealed = progress <= 0;
  // When progress is 1: fully swept & completed
  const isFullyRevealed = progress >= 1;
  // When 0 < progress < 1: actively being swept by the 5-cursor team
  const isActivelySweeping = progress > 0 && progress < 1;

  // Progressive clip-path calculation for the active vibrant reveal layer
  const clipPathStyle = isFullyRevealed
    ? 'none'
    : isUnrevealed
    ? direction === 'vertical'
      ? 'inset(0 0 100% 0)'
      : 'inset(0 100% 0 0)'
    : direction === 'vertical'
    ? `inset(0 0 ${(1 - progress) * 100}% 0)`
    : `inset(0 ${(1 - progress) * 100}% 0 0)`;

  const [justFinished, setJustFinished] = React.useState(false);

  React.useEffect(() => {
    if (isFullyRevealed) {
      setJustFinished(true);
      const timer = setTimeout(() => setJustFinished(false), 900);
      return () => clearTimeout(timer);
    }
  }, [isFullyRevealed]);

  return (
    <Component
      data-cursor-target={id}
      data-reveal-direction={direction}
      className={`relative will-change-[clip-path,opacity] transition-all duration-300 ${
        isFullyRevealed
          ? `opacity-100 filter-none pointer-events-auto ${
              justFinished
                ? 'ring-1 ring-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.25)] rounded-2xl'
                : ''
            }`
          : isActivelySweeping
          ? 'opacity-100 ring-2 ring-cyan-400/90 shadow-[0_0_35px_rgba(6,182,212,0.45),0_0_15px_rgba(239,68,68,0.3)] rounded-xl pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      } ${className}`}
    >
      {/* Primary Content Container with Progressive Mask Sweep */}
      <div
        className="relative w-full h-full transition-all duration-75"
        style={{
          clipPath: isFullyRevealed ? 'none' : clipPathStyle,
          WebkitClipPath: isFullyRevealed ? 'none' : clipPathStyle,
        }}
      >
        {children}
      </div>

      {/* Figma-style Interactive Selection Outline & 4 Corner Handles during Active Cursor Interaction */}
      {(isActivelySweeping || justFinished) && (
        <div className="absolute -inset-1.5 pointer-events-none z-20 rounded-xl border border-cyan-400/90 shadow-[0_0_20px_rgba(6,182,212,0.35)] animate-pulse">
          {/* Corner Handles */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-cyan-300 border border-slate-950 shadow-md rounded-[2px]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-300 border border-slate-950 shadow-md rounded-[2px]" />
          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-cyan-300 border border-slate-950 shadow-md rounded-[2px]" />
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-cyan-300 border border-slate-950 shadow-md rounded-[2px]" />
        </div>
      )}

      {/* Laser Frontier Line (visually tracks the cursor during active sweep) */}
      {isActivelySweeping && direction === 'horizontal' && (
        <div
          className="absolute top-0 bottom-0 w-[3px] pointer-events-none z-30 transition-none"
          style={{
            left: `${progress * 100}%`,
            background: 'linear-gradient(to bottom, #ef4444 0%, #06b6d4 50%, #ef4444 100%)',
            boxShadow:
              '0 0 14px 2px rgba(6, 182, 212, 0.95), 0 0 24px 4px rgba(239, 68, 68, 0.75)',
          }}
        />
      )}

      {isActivelySweeping && direction === 'vertical' && (
        <div
          className="absolute left-0 right-0 h-[3px] pointer-events-none z-30 transition-none"
          style={{
            top: `${progress * 100}%`,
            background: 'linear-gradient(to right, #ef4444 0%, #06b6d4 50%, #ef4444 100%)',
            boxShadow:
              '0 0 14px 2px rgba(6, 182, 212, 0.95), 0 0 24px 4px rgba(239, 68, 68, 0.75)',
          }}
        />
      )}
    </Component>
  );
};
