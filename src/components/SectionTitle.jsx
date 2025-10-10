import React from 'react';
import './SectionTitle.css';
import { FaArrowDown } from 'react-icons/fa';

const SectionTitle = ({ text, textId, paragraph, id, nextSectionId, children }) => {
  // Smooth scroll to next section
  const handleScrollDown = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="section-title-container" id={id}>
      <h1>{text}</h1>
      <div id={textId}></div>
      {paragraph && <p>{paragraph}</p>}
      {children}

      <button className="bouncing-arrow" onClick={handleScrollDown} aria-label="Scroll down">
        <FaArrowDown size={42} />
      </button>
    </div>
  );
};

export default SectionTitle;
