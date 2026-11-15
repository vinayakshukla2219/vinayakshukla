import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

export type PortfolioSection =
  | 'HOME'
  | 'ABOUT'
  | 'SKILLS'
  | 'PROJECTS'
  | 'EDUCATION'
  | 'CONTACT'
  | 'FINISHED';

interface RevealContextType {
  progressMap: Record<string, number>;
  getProgress: (id: string) => number;
  setProgress: (id: string, progress: number) => void;
  completeReveal: (id: string) => void;
  resetTour: () => void;
  activeSection: PortfolioSection;
  setActiveSection: (section: PortfolioSection) => void;
  isPlaying: boolean;
  pauseTour: () => void;
  resumeTour: () => void;
  tourCompleted: boolean;
  setTourCompleted: (completed: boolean) => void;
}

const RevealContext = createContext<RevealContextType | null>(null);

export const useReveal = () => {
  const ctx = useContext(RevealContext);
  if (!ctx) throw new Error('useReveal must be used within RevealProvider');
  return ctx;
};

export const RevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // progressMap stores progress for each element ID: 0.0 (hidden) to 1.0 (fully revealed)
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState<PortfolioSection>('HOME');
  const [isPlaying, setIsPlaying] = useState(true);
  const [tourCompleted, setTourCompleted] = useState(false);

  const getProgress = useCallback(
    (id: string) => {
      return progressMap[id] ?? 0;
    },
    [progressMap]
  );

  // setProgress ensures progress only increases, preserving already revealed content permanently
  const setProgress = useCallback((id: string, progress: number) => {
    const clamped = Math.max(0, Math.min(1, progress));
    setProgressMap((prev) => {
      const current = prev[id] ?? 0;
      if (clamped <= current) return prev;
      return {
        ...prev,
        [id]: clamped,
      };
    });
  }, []);

  const completeReveal = useCallback((id: string) => {
    setProgressMap((prev) => {
      if ((prev[id] ?? 0) >= 1) return prev;
      return {
        ...prev,
        [id]: 1,
      };
    });
  }, []);

  const resetTour = useCallback(() => {
    setProgressMap({});
    setActiveSection('HOME');
    setTourCompleted(false);
    setIsPlaying(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const pauseTour = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resumeTour = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <RevealContext.Provider
      value={{
        progressMap,
        getProgress,
        setProgress,
        completeReveal,
        resetTour,
        activeSection,
        setActiveSection,
        isPlaying,
        pauseTour,
        resumeTour,
        tourCompleted,
        setTourCompleted,
      }}
    >
      {children}
    </RevealContext.Provider>
  );
};
