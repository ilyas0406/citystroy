'use client';
import React from 'react';
import './flipcard.css'; // Подключим стили отдельно

type FlipCardProps = {
  frontTitle: string;
  frontText: string;
  backText: string;
};

const FlipCard: React.FC<FlipCardProps> = ({ frontTitle, frontText, backText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className="text-xl font-bold mb-2">{frontTitle}</h3>
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
