import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryCards from '../components/CategoryCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-black text-white w-full">
      <div className="relative z-10 w-full">
        <HeroSlider />
      </div>
      
      <div className="w-full mx-auto px-2 sm:px-4 py-8 sm:py-10 md:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Collections</h2>
        <CategoryCards />
      </div>
    </div>
  );
} 