// src/components/Marquee.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Marquee.css';
import { useTranslation } from 'react-i18next';

const Marquee = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const { t } = useTranslation();

  // Build the text once from translations
  const marqueeText = (
    <>
      {t('pricing.pricing_marquee_content')}{" "}
      <strong>{t('pricing.pricing_marquee_strong_1')}</strong>{" "}
      {t('pricing.pricing_marquee_content_1')}{" "}
      <strong>{t('pricing.pricing_marquee_strong_2')}</strong>{" "}
      {t('pricing.pricing_marquee_content_3')}
      <span style={{ visibility: 'hidden' }}>ppp</span>•
    </>
  );

  useEffect(() => {
    const speed = 60; // pixels per second
    let pos = 0;
    let rafId = null;
    let lastTimestamp = null;
    const track = trackRef.current;
    if (!track) return;

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
    return () => cancelAnimationFrame(rafId);
  }, [paused, t]); // include t so it updates when language changes

  return (
    <div
      className="marquee"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="marquee__inner" ref={trackRef}>
        {/* render twice for seamless loop */}
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </div>
    </div>
  );
};

export default Marquee;
