import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryCards from '../components/CategoryCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-black text-white">
      <div className="relative z-10">
        <HeroSlider />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center mt-8">Our Collections</h2>
        <CategoryCards />
      </div>
    </div>
  );
} 