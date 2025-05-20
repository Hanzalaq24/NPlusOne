import React from 'react';

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-custom-black text-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Wishlist</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
            {/* Empty wishlist message */}
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-xl text-gray-400 mb-4">Your wishlist is empty</p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Explore Products
              </button>
            </div>
            
            {/* Wishlist items would go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 hidden">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                  <div className="h-64 bg-gray-600 relative">
                    <button className="absolute top-2 right-2 p-1 bg-gray-900 rounded-full text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">Wishlist Item {item}</h3>
                    <p className="text-gray-400 mb-3">₹1,499</p>
                    <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 