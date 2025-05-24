"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CollectionItem } from '@/types';

interface CollectionSliderProps {
  collectionItems: CollectionItem[];
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ collectionItems }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  
  // Adjust items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
      <div className="mt-8 mb-8 overflow-hidden relative px-6 sm:px-8 md:px-10">
        {/* Prev button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="flex justify-center sm:justify-between items-center gap-2 md:gap-4 lg:gap-6 w-full">
          {getCurrentItems().map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 sm:px-2">
              <Link href={item.link}>
                <div className="relative rounded-full overflow-hidden border-4 border-[#CDCDCD] w-full">
                  <div className="aspect-[3/4] w-full max-w-[273px] mx-auto">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      role="image"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity hover:bg-opacity-10"></div>
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 py-2 md:py-4 flex flex-col items-center">
                    <h4 className="text-white text-base sm:text-lg font-bold text-center">{item.title}</h4>
                    <span className="text-white text-xs sm:text-sm mt-1">SHOP NOW</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Next button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        {/* Slider pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSliderIndex(idx)}
              className={`mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full ${
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