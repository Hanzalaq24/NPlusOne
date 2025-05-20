import React from 'react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-custom-black text-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Sales & Offers</h1>
        <p className="text-center text-xl mb-8">Amazing discounts on our premium collections</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Placeholder for products */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-80 bg-gray-700 relative">
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 font-bold">
                  30% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Sale Item {item}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 line-through">₹1,999</p>
                  <p className="text-red-500 font-medium">₹1,399</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}