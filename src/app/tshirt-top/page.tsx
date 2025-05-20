import React from 'react';

export default function TshirtTopPage() {
  return (
    <div className="min-h-screen bg-custom-black text-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">T-Shirts & Tops Collection</h1>
        <p className="text-center text-xl mb-8">Explore our premium collection of T-shirts and tops</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Placeholder for products */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-80 bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-lg font-medium">T-Shirt {item}</h3>
                <p className="text-gray-400">₹999</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 