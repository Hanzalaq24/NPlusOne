"use client";

import React, { useState, useEffect } from 'react';
import CategoryGrid from './home/CategoryGrid';
import CollectionSlider from './home/CollectionSlider';
import DiscountBanner from './home/DiscountBanner';
import RecommendedProducts from './home/RecommendedProducts';
import SectionTitle from './home/SectionTitle';
import WelcomePopup from './WelcomePopup';
import { Product } from '@/types';
import { 
  categories, 
  collectionItems, 
  recommendedProducts,
  sampleRecentlyViewed,
  shoppingGreetings
} from '@/data/mockData';

const CategoryCards = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [hasViewedProducts, setHasViewedProducts] = useState(false);

  // Check for logged in user data and load recently viewed products
  useEffect(() => {
    // This would check for user data from login system
    const loggedInUserName = localStorage.getItem('user_logged_in_name');
    if (loggedInUserName) {
      setUserName(loggedInUserName);
    }
    
    // Load recently viewed products from localStorage
    if (typeof window !== 'undefined') {
      const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      if (storedRecentlyViewed.length > 0) {
        setRecentlyViewed(storedRecentlyViewed);
        setHasViewedProducts(true);
      }
    }
  }, []);

  const handleLogoClick = () => {
    // Only show popup if user is logged in
    if (userName) {
      // Show a random greeting
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * shoppingGreetings.length);
      } while (newIndex === greetingIndex && shoppingGreetings.length > 1);
      
      setGreetingIndex(newIndex);
      setShowPopup(true);
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Grid */}
        <CategoryGrid categories={categories} />
        
        {/* Discount Banner */}
        <DiscountBanner />
        
        {/* Explore Collection Title */}
        <SectionTitle title="Explore Collection" />
        
        {/* Collection Slider */}
        <CollectionSlider collectionItems={collectionItems} />
        
        {/* Recommended Products */}
        <RecommendedProducts products={recommendedProducts} />
      </div>

      {/* Popup Message */}
      <WelcomePopup 
        userName={userName}
        greeting={shoppingGreetings[greetingIndex]}
        showPopup={showPopup && !!userName}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default CategoryCards; 