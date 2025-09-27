// src/components/SectionTitle.jsx

import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ text, paragraph, id }) => {
  return (
    <div className="section-title-container" id={id}>
      <h1>{text}</h1>
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
};

export default SectionTitle;