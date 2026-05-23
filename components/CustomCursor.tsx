"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the device is a touch device. Custom cursors are bad on mobile.
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  // Don't render anything on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <style>{`
        /* Hide the default cursor everywhere */
        body, a, button, input, textarea, select, [role="button"] { 
          cursor: none !important; 
        }

        .cursor-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #568aa3; /* Adjusted to match your portfolio brand color! */
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          opacity: ${isVisible ? 1 : 0};
        }
        
        .cursor-ring {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #568aa3; /* Adjusted to match your portfolio brand color! */
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.12s cubic-bezier(.25,.46,.45,.94);
          z-index: 9998;
          opacity: ${isVisible ? 1 : 0};
        }

        /* Enlarge ring on interactive elements */
        body:has(a:hover, button:hover, [role="button"]:hover) .cursor-ring {
          width: 48px;
          height: 48px;
          background-color: rgba(86, 138, 163, 0.1);
        }
      `}</style>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
