import React from 'react';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-custom-black text-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Account</h1>
        
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-700 rounded-full max-w-[150px] mx-auto"></div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-2">Guest User</h2>
              <p className="text-gray-400 mb-4">guest@example.com</p>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">My Orders</h3>
              <p className="text-gray-400">Track your recent orders</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">My Addresses</h3>
              <p className="text-gray-400">Manage your delivery addresses</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">My Wishlist</h3>
              <p className="text-gray-400">View your wishlisted items</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">My Reviews</h3>
              <p className="text-gray-400">Manage your product reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 