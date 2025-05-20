import React from 'react';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-custom-black text-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Shopping Cart</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Items</h2>
              
              {/* Empty cart message */}
              {true && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-xl text-gray-400 mb-4">Your cart is empty</p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                    Start Shopping
                  </button>
                </div>
              )}
              
              {/* Cart items would go here */}
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Shipping</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Tax</span>
                <span>₹0.00</span>
              </div>
              <div className="border-t border-gray-700 my-4"></div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹0.00</span>
              </div>
              <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 