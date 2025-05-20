"use client";

import React from 'react';
import Link from 'next/link';

const DiscountBanner: React.FC = () => {
  return (
    <div className="mt-8 mb-8">
      <Link href="/sales">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src="/images/categories/Discount-Banner.jpg"
            alt="Special Discount Offers"
            style={{ width: '1248px', height: '500px', objectFit: 'cover' }}
            className="ITC-image image-fluid common-image-component transition-transform duration-300 hover:scale-105"
            role="image"
          />
        </div>
      </Link>
    </div>
  );
};

export default DiscountBanner; 