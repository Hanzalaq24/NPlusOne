"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      setPrevScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Header background style with transparency when not scrolled or hovered
  const headerStyle = {
    backgroundColor: isScrolled || isHovered || mobileMenuOpen ? 'rgb(35, 31, 30)' : 'transparent',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    transform: scrollDirection === 'up' && isScrolled ? 'translateY(-100%)' : 'translateY(0)'
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={headerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (window.scrollY <= 50) {
          setIsScrolled(false);
        }
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative">
                <Image 
                  src="/images/logo.svg" 
                  alt="NPlusOne Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {/* TSHIRT */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('tshirt')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/tshirt-top" className="text-white hover:text-gray-300 py-2">
                TSHIRT
              </Link>
              {activeDropdown === 'tshirt' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/tshirt-top/round-neck" className="block text-gray-600 hover:text-gray-900">Round Neck</Link></li>
                      <li><Link href="/tshirt-top/v-neck" className="block text-gray-600 hover:text-gray-900">V-Neck</Link></li>
                      <li><Link href="/tshirt-top/polo" className="block text-gray-600 hover:text-gray-900">Polo</Link></li>
                      <li><Link href="/tshirt-top/graphic" className="block text-gray-600 hover:text-gray-900">Graphic Tees</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=T-Shirt+1" 
                        alt="T-shirt Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Casual Collection
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=T-Shirt+2" 
                        alt="T-shirt Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Premium Collection
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* TOP WEAR */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('top-wear')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/tshirt-top" className="text-white hover:text-gray-300 py-2">
                TOP WEAR
              </Link>
              {activeDropdown === 'top-wear' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/tshirt-top/shirts" className="block text-gray-600 hover:text-gray-900">Shirts</Link></li>
                      <li><Link href="/tshirt-top/blouses" className="block text-gray-600 hover:text-gray-900">Blouses</Link></li>
                      <li><Link href="/tshirt-top/tunics" className="block text-gray-600 hover:text-gray-900">Tunics</Link></li>
                      <li><Link href="/tshirt-top/tops" className="block text-gray-600 hover:text-gray-900">Tops</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Top+Wear+1" 
                        alt="Top Wear Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Casual Collection
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Top+Wear+2" 
                        alt="Top Wear Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Formal Collection
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* NIGHT PANT */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('night-pant')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/night-bottoms" className="text-white hover:text-gray-300 py-2">
                NIGHT PANT
              </Link>
              {activeDropdown === 'night-pant' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/night-bottoms/pajamas" className="block text-gray-600 hover:text-gray-900">Pajamas</Link></li>
                      <li><Link href="/night-bottoms/sleep-shorts" className="block text-gray-600 hover:text-gray-900">Sleep Shorts</Link></li>
                      <li><Link href="/night-bottoms/lounge-pants" className="block text-gray-600 hover:text-gray-900">Lounge Pants</Link></li>
                      <li><Link href="/night-bottoms/leggings" className="block text-gray-600 hover:text-gray-900">Leggings</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Night+Pant+1" 
                        alt="Night Pant Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Cotton Collection
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Night+Pant+2" 
                        alt="Night Pant Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Comfort Collection
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* CHILD WEAR */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('child-wear')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/girls-wear" className="text-white hover:text-gray-300 py-2">
                CHILD WEAR
              </Link>
              {activeDropdown === 'child-wear' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/girls-wear/girls" className="block text-gray-600 hover:text-gray-900">Girls</Link></li>
                      <li><Link href="/girls-wear/boys" className="block text-gray-600 hover:text-gray-900">Boys</Link></li>
                      <li><Link href="/girls-wear/infants" className="block text-gray-600 hover:text-gray-900">Infants</Link></li>
                      <li><Link href="/girls-wear/teens" className="block text-gray-600 hover:text-gray-900">Teens</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Child+Wear+1" 
                        alt="Child Wear Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Summer Collection
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Child+Wear+2" 
                        alt="Child Wear Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Winter Collection
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* CO-ORD SETS */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('co-ord-sets')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/co-ord-sets" className="text-white hover:text-gray-300 py-2">
                CO-ORD SETS
              </Link>
              {activeDropdown === 'co-ord-sets' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/co-ord-sets/casual" className="block text-gray-600 hover:text-gray-900">Casual Sets</Link></li>
                      <li><Link href="/co-ord-sets/formal" className="block text-gray-600 hover:text-gray-900">Formal Sets</Link></li>
                      <li><Link href="/co-ord-sets/party" className="block text-gray-600 hover:text-gray-900">Party Sets</Link></li>
                      <li><Link href="/co-ord-sets/lounge" className="block text-gray-600 hover:text-gray-900">Lounge Sets</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Co-ord+Sets+1" 
                        alt="Co-ord Sets Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Trending Sets
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Co-ord+Sets+2" 
                        alt="Co-ord Sets Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Premium Sets
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* LADIES NIGHT DRESS */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('ladies-night-dress')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/night-bottoms" className="text-white hover:text-gray-300 py-2">
                LADIES NIGHT DRESS
              </Link>
              {activeDropdown === 'ladies-night-dress' && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md py-5 px-6 grid grid-cols-3 gap-4 z-10">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800 mb-3">CATEGORIES</h3>
                    <ul className="space-y-2">
                      <li><Link href="/night-bottoms/nightgowns" className="block text-gray-600 hover:text-gray-900">Nightgowns</Link></li>
                      <li><Link href="/night-bottoms/pajama-sets" className="block text-gray-600 hover:text-gray-900">Pajama Sets</Link></li>
                      <li><Link href="/night-bottoms/chemises" className="block text-gray-600 hover:text-gray-900">Chemises</Link></li>
                      <li><Link href="/night-bottoms/robes" className="block text-gray-600 hover:text-gray-900">Robes</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Night+Dress+1" 
                        alt="Night Dress Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Satin Collection
                      </div>
                    </div>
                    <div className="relative h-32 rounded overflow-hidden">
                      <Image 
                        src="https://placehold.co/600x400/gray/white?text=Night+Dress+2" 
                        alt="Night Dress Category"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1 px-2">
                        Cotton Collection
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side icons - always visible */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/account" className="text-white hover:text-gray-300">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <Link href="/wishlist" className="text-white hover:text-gray-300">
              <span className="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            
            <Link href="/cart" className="text-white hover:text-gray-300">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/tshirt-top" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              TSHIRT
            </Link>
            <Link href="/tshirt-top" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOP WEAR
            </Link>
            <Link href="/night-bottoms" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              NIGHT PANT
            </Link>
            <Link href="/girls-wear" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CHILD WEAR
            </Link>
            <Link href="/co-ord-sets" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CO-ORD SETS
            </Link>
            <Link href="/night-bottoms" 
              className="block py-2 text-white hover:bg-gray-800 rounded px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              LADIES NIGHT DRESS
            </Link>
            
            {/* Mobile icons */}
            <div className="flex space-x-4 mt-4 border-t border-gray-700 pt-4">
              <Link href="/account" 
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              
              <Link href="/wishlist" 
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Wishlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
              
              <Link href="/cart" 
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 