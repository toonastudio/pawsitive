'use client';

import { Nav } from './Nav';
import { useEffect, useState } from 'react';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (approximately 100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Only show border after scrolling past hero section
      setHasScrolled(scrollPosition > heroHeight);
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

  return (
    <header 
      id="header" 
      className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-sm transition-all duration-300"
    >
      <Nav />
    </header>
  );
}
