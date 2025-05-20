"use client";

import React from 'react';

interface WelcomePopupProps {
  userName: string;
  greeting: string;
  showPopup: boolean;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ 
  userName, 
  greeting, 
  showPopup, 
  onClose 
}) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-30" onClick={onClose}></div>
      <div className="bg-[#CDCDCD] px-8 py-6 rounded-lg shadow-xl z-10 max-w-md text-center animate-fade-in">
        <h3 className="font-bold text-2xl mb-3" style={{ color: 'rgb(35, 32, 30)' }}>
          Hi {userName}!
        </h3>
        <p className="text-xl" style={{ color: 'rgb(35, 32, 30)' }}>
          {greeting}
        </p>
        <button 
          onClick={onClose}
          className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup; 