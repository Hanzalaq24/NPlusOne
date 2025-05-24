"use client";

import React, { useState } from 'react';
import { Product } from '@/types';
import Image from 'next/image';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Default values
  const sizes = product.sizes || ['32', '34', '36', '38', '40', '42'];
  const colors = product.colors || [
    { name: 'Off-White-Black', color: '#f8f4e3' }
  ];
  
  // Use product thumbnails or create default ones
  const thumbnails = product.thumbnails || [
    { url: product.image, alt: product.alt },
    { url: product.image, alt: product.alt },
    { url: product.image, alt: product.alt },
    { url: product.image, alt: product.alt },
  ];

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Added to cart:', { product, size: selectedSize, quantity });
    onClose();
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log('Buy now:', { product, size: selectedSize, quantity });
    // Redirect to checkout
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white text-gray-800 max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Product images */}
          <div className="md:w-1/2 p-4">
            <div className="flex">
              {/* Thumbnails */}
              <div className="w-1/5 mr-2">
                {thumbnails.map((thumb, index) => (
                  <div 
                    key={index}
                    className={`mb-2 border-2 ${selectedImage === index ? 'border-gray-800' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={thumb.url} 
                      alt={`${thumb.alt} thumbnail ${index + 1}`}
                      className="w-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              
              {/* Main image */}
              <div className="w-4/5">
                <img
                  src={thumbnails[selectedImage].url}
                  alt={thumbnails[selectedImage].alt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right side - Product details */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">{product.title}</h2>
            
            <div className="mb-4">
              <span className="text-xl font-bold">MRP {product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  <span className="text-sm text-red-600 ml-2">{product.discount}</span>
                </>
              )}
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            </div>

            {/* Color selection */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">SELECT COLOR</h3>
              <div className="flex">
                {colors.map((color, index) => (
                  <div key={index} className="mr-2 relative">
                    <div 
                      className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    ></div>
                    <div className="mt-1 text-xs text-center">{color.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center
                      ${selectedSize === size 
                        ? 'border-gray-800 bg-gray-100' 
                        : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded uppercase font-medium"
              >
                ADD TO BAG
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded uppercase font-medium"
              >
                BUY NOW
              </button>
            </div>

            {/* Product details section */}
            <div>
              <h3 className="font-bold text-red-600 mb-2">PRODUCT DETAILS</h3>
              <p className="text-sm text-gray-700">
                {product.description || 'This elegant piece features premium fabric with intricate details. Perfect for both casual and formal occasions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal; 