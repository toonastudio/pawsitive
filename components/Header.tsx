'use client';

import { Nav } from './Nav';
import { useEffect, useState } from 'react';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show background as soon as user starts scrolling
      setHasScrolled(scrollPosition > 10);
    };

    // Add a small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        hasScrolled || isMobileMenuOpen
          ? 'bg-background backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <Nav hasScrolled={hasScrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
}
