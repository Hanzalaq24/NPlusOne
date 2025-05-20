"use client";

import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="col-12">
      <h3 
        className="h3 text-center carousel-title text-4xl font-bold" 
        style={{ width: '1248px', height: '82px' }}
        role="heading"
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle; 