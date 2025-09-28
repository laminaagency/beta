// src/components/SectionTitle.jsx

import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ text, textId, paragraph, id, children }) => {
  return (
    <div className="section-title-container" id={id}>
      <h1>{text}</h1>
      <div id={textId}></div>
      {paragraph && <p>{paragraph}</p>}
      {children}
    </div>
  );
};

export default SectionTitle;