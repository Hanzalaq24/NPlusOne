"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and when window is resized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Use local image paths with empty text fields
  const slides = [
    {
      url: isMobile ? '/images/mobile/mobile.jpg' : '/images/slider_1.jpg',
      alt: 'Elegant Women\'s Fashion',
    },
    {
      url: isMobile ? '/images/mobile/Mobile-Heroslider_2.jpg' : '/images/Slider_2.jpg',
      alt: 'Premium Collection',
    },
    {
      url: isMobile ? '/images/mobile/Mobile-Heroslider_3.png' : '/images/slider_3.png',
      alt: 'Stylish Designs',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Hero images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrevious}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Dots indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-[#CDCDCD]' : 'bg-[#CDCDCD] bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 