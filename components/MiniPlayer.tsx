"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay when the component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.3; // Set background volume (30%)
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        // Modern browsers block autoplay unless the user has interacted with the page.
        // We catch the error silently so the user can just click the play button.
        console.log("Autoplay blocked by browser policy. Waiting for user interaction.");
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '1.5rem',
      left: '1.5rem',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '30px',
      padding: '0.4rem 1rem 0.4rem 0.4rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      color: 'var(--text-primary)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <audio ref={audioRef} src="/humble.mp3" loop />
      
      <button 
        onClick={togglePlay}
        style={{
          background: '#568aa3',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '2px' }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
        )}
      </button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>HUMBLE.</span>
        <span style={{ fontSize: '0.65rem', color: '#568aa3' }}>Kendrick Lamar</span>
      </div>
      
      {/* Sound waves animation */}
      {isPlaying && (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px', marginLeft: '0.25rem' }}>
          <style>{`
            @keyframes sound { 0% { height: 2px; } 50% { height: 12px; } 100% { height: 2px; } }
            .bar { width: 2px; background: #568aa3; animation: sound 1s infinite ease-in-out; border-radius: 2px; }
            .bar:nth-child(1) { animation-delay: 0.1s; }
            .bar:nth-child(2) { animation-delay: 0.3s; }
            .bar:nth-child(3) { animation-delay: 0.0s; }
            .bar:nth-child(4) { animation-delay: 0.2s; }
          `}</style>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </div>
  );
}
