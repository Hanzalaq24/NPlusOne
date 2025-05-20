"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CollectionItem } from '@/types';

interface CollectionSliderProps {
  collectionItems: CollectionItem[];
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ collectionItems }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  
  // Items to show per page in slider
  const itemsPerPage = 4;
  const totalPages = Math.ceil(collectionItems.length / itemsPerPage);
  
  // Navigate slider
  const nextSlide = () => {
    setSliderIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSliderIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };
  
  // Get current slider items
  const getCurrentItems = () => {
    const startIndex = sliderIndex * itemsPerPage;
    return collectionItems.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <>
      {/* Collection Slider */}
      <div className="mt-8 mb-8 overflow-hidden relative">
        {/* Prev button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="flex justify-center gap-6">
          {getCurrentItems().map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link href={item.link}>
                <div className="relative rounded-full overflow-hidden border-4 border-[#CDCDCD]" style={{ width: '273px', height: '379px' }}>
                  <img 
                    src={item.image}
                    alt={item.alt}
                    style={{ width: '273px', height: '379px', objectFit: 'cover' }}
                    className="ITC-image image-fluid common-image-component transition-transform duration-300 hover:scale-105"
                    role="image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-10"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      className="bg-white rounded-full p-2 shadow-md"
                      aria-label="Quick view"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 py-4 flex flex-col items-center">
                    <h4 className="text-white text-lg font-bold text-center">{item.title}</h4>
                    <span className="text-white text-sm mt-1">SHOP NOW</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Next button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        {/* Slider pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSliderIndex(idx)}
              className={`mx-1 w-3 h-3 rounded-full ${
                idx === sliderIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionSlider; 