"use client";

import React from 'react';
import Link from 'next/link';
import { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {categories.map((category, index) => (
        <Link key={index} href={category.link}>
          <div className="relative border-4 border-[#CDCDCD] rounded-lg overflow-hidden">
            <img 
              src={category.image === '/images/categories/tshirt.jpg' ? '/images/categories/Tshirt.jpg' : 
                  category.image === '/images/categories/topwear.jpg' ? '/images/categories/Tshirt.jpg' :
                  category.image === '/images/categories/nightpant.jpg' ? '/images/categories/Nightwear.jpg' :
                  category.image === '/images/categories/childwear.jpg' ? '/images/categories/girl.jpg' :
                  category.image === '/images/categories/coordsets.jpg' ? '/images/categories/CO-ORD.jpg' :
                  '/images/categories/Nightwear.jpg'}
              alt={category.alt}
              style={{ width: '394px', height: '270px', objectFit: 'cover' }}
              className="ITC-image image-fluid common-image-component transition-transform duration-300 hover:scale-105"
              role="image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid; 