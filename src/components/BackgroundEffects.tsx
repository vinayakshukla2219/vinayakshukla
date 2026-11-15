import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark gradient base */}
      <div className="absolute inset-0 bg-[#050608]" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70" />

      {/* Top Right Deep Red Ambient Glow (matches video's cinematic red) */}
      <div
        className="absolute -top-[15%] right-[-5%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #ef4444 0%, #b91c1c 45%, transparent 70%)',
        }}
      />

      {/* Bottom Left Electric Cyan Ambient Glow */}
      <div
        className="absolute top-[40%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #0284c7 40%, transparent 70%)',
        }}
      />

      {/* Mid-page subtle red glow near featured projects */}
      <div
        className="absolute top-[75%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, #991b1b 50%, transparent 75%)',
        }}
      />

      {/* Subtle vignette border */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.85)]" />
    </div>
  );
};
