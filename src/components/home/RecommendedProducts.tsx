"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import QuickViewModal from '../QuickViewModal';

interface RecommendedProductsProps {
  products: Product[];
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products }) => {
  const [recommendedIndex, setRecommendedIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Adjust items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total pages
  const totalRecommendedPages = Math.ceil(products.length / itemsPerView);
  
  // Navigate recommended products
  const nextRecommended = () => {
    setRecommendedIndex((prevIndex) => 
      prevIndex === totalRecommendedPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRecommended = () => {
    setRecommendedIndex((prevIndex) => 
      prevIndex === 0 ? totalRecommendedPages - 1 : prevIndex - 1
    );
  };
  
  // Get current recommended products
  const getCurrentRecommended = () => {
    const startIndex = recommendedIndex * itemsPerView;
    return products.slice(startIndex, startIndex + itemsPerView);
  };

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="mt-10 md:mt-16 mb-8">
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#CDCDCD]">RECOMMENDED FOR YOU</h3>
      
      <div className="overflow-hidden relative px-6 sm:px-8 md:px-10">
        {/* Prev button */}
        <button 
          onClick={prevRecommended}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Previous recommended products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="flex justify-center sm:justify-between items-center gap-2 md:gap-4 lg:gap-6 w-full">
          {getCurrentRecommended().map((product) => (
            <div key={product.id} className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 sm:px-2">
              <div className="relative">
                {product.badge && (
                  <div className={`absolute top-0 left-0 z-10 px-2 sm:px-4 py-1 text-xs text-white font-medium ${product.badge === 'Sale' ? 'bg-red-600' : 'bg-blue-600'}`}>
                    {product.badge}
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <Link href={product.link}>
                    <div className="aspect-[4/5] w-full max-w-[290px] mx-auto">
                      <img 
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                        role="image"
                      />
                    </div>
                  </Link>
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-10"></div>
                  
                  {/* Quick View Button */}
                  <button 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                    onClick={() => openQuickView(product)}
                    aria-label="Quick view"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
                <div className="mt-2 flex items-start justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-[#CDCDCD] line-clamp-1">{product.title}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-xs sm:text-sm font-bold text-[#CDCDCD]">{product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                          <span className="text-xs text-red-600 ml-2">{product.discount}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Next button */}
        <button 
          onClick={nextRecommended}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 md:p-3 rounded-full shadow-md hover:bg-opacity-100"
          aria-label="Next recommended products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        {/* Slider pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalRecommendedPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setRecommendedIndex(idx)}
              className={`mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full ${
                idx === recommendedIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to recommended page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal 
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={closeQuickView}
        />
      )}
    </div>
  );
};

export default RecommendedProducts; 