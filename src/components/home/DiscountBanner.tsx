"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DiscountBanner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and when window is resized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="mt-8 mb-8">
      <Link href="/sales">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={isMobile ? "/images/mobile/MobileDiscount-Banner.jpg" : "/images/categories/Discount-Banner.jpg"}
            alt="Special Discount Offers"
            style={{ width: '100%', height: isMobile ? 'auto' : '500px', objectFit: 'cover' }}
            className="ITC-image image-fluid common-image-component transition-transform duration-300 hover:scale-105"
            role="image"
          />
        </div>
      </Link>
    </div>
  );
};

export default DiscountBanner; 