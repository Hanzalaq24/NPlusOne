import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-custom-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link href="/" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 