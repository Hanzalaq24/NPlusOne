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
              src={category.image === '/images/categories/tshirt.jpg' ? 'https://placehold.co/600x400/gray/white?text=T-Shirt' : 
                  category.image === '/images/categories/topwear.jpg' ? 'https://placehold.co/600x400/gray/white?text=Top+Wear' :
                  category.image === '/images/categories/nightpant.jpg' ? 'https://placehold.co/600x400/gray/white?text=Night+Pant' :
                  category.image === '/images/categories/childwear.jpg' ? 'https://placehold.co/600x400/gray/white?text=Child+Wear' :
                  category.image === '/images/categories/coordsets.jpg' ? 'https://placehold.co/600x400/gray/white?text=Co-ord+Sets' :
                  'https://placehold.co/600x400/gray/white?text=Night+Dress'}
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