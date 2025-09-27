// src/components/Marquee.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Marquee.css';

const Marquee = () => {
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const speed = 60; // pixels per second
    let pos = 0;
    let rafId = null;
    let lastTimestamp = null;
    const track = trackRef.current;

    if (!track) return;

    // Clone content for a seamless loop
    track.innerHTML += track.innerHTML;

    const step = (ts) => {
      if (!lastTimestamp) lastTimestamp = ts;
      const delta = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;

      if (!paused) {
        pos -= speed * delta;
        const resetPoint = track.scrollWidth / 2;
        if (-pos >= resetPoint) {
          pos += resetPoint;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    // Cleanup function to prevent memory leaks
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [paused]); // Re-run effect when 'paused' state changes

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleFocusIn = () => setPaused(true);
  const handleFocusOut = () => setPaused(false);

  return (
    <div
      className="marquee"
      ref={marqueeRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusIn={handleFocusIn}
      onFocusOut={handleFocusOut}
    >
      <div className="marquee__inner" ref={trackRef}>
        {/* <span>🚀 Consultoría GRATIS:</span>
        <span>🎁 Análisis visual,</span>
        <span>📦 Nuevo stock</span>
        <span>✍️ Blog: Cómo lo hicimos</span> */}
        <span>Consultoría <strong>GRATIS</strong>: Análisis visual, de contenido y UX. Sin costo! Analizamos, reportamos y proponemos de manera gratuita! <span style={{ visibility: "hidden" }}>ppp</span>• </span>
        <span>Consultoría <strong>GRATIS</strong>: Análisis visual, de contenido y UX. Sin costo! Analizamos, reportamos y proponemos de manera gratuita! <span style={{ visibility: "hidden" }}>ppp</span>• </span>
      </div>
    </div>
  );
};

export default Marquee;