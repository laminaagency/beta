import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

const ScrollToTopButton = ({ footerId = 'footer' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(footerId);
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show button only when the footer is visible in viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // visible when at least 10% of footer is in view
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
