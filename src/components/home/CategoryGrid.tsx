"use client";

import React from 'react';
import Link from 'next/link';
import { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-4">
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
              className="w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[270px] object-cover transition-transform duration-300 hover:scale-105"
              role="image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg sm:text-xl font-bold">{category.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid; 