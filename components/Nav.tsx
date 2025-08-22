'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import LogoSVG from 'public/logo.svg';
import { Button } from './ui/button';
import { useFadeIn } from '@/lib/hooks/useFadeIn';
import { useState } from 'react';

const navigationMenuItems = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Packages',
    href: '#packages',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

interface NavProps {
  hasScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Nav({ hasScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: NavProps) {
  const { elementRef: navRef, isVisible: navVisible } = useFadeIn({ threshold: 0.1 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    setIsMobileMenuOpen(newState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div 
      ref={navRef}
      className={`fade-in ${navVisible ? 'visible' : ''} flex h-[100px] items-center px-6 lg:px-10 relative z-50`}
    >
      <Link href="/">
        <LogoSVG className="h-12" />
        <span className="sr-only">Pawsitive Pet Care Homepage</span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="ml-12 hidden lg:flex">
          {navigationMenuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="ml-auto hidden lg:inline-flex" asChild>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Book an appointment
        </a>
      </Button>

      {/* Animated Burger Menu Button */}
      <button
        className="ml-auto lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {/* Burger Lines */}
        <span 
          className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out mt-1.5 origin-center ${
            isMenuOpen ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out mt-1.5 origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed left-0 right-0 top-[100px] bottom-0 z-30 border-t border-border animate-in fade-in-0 duration-500" 
          style={{ 
            backgroundColor: 'hsl(var(--background))',
            position: 'fixed', 
            left: '0', 
            right: '0', 
            top: '100px', 
            bottom: '0', 
            zIndex: '30',
            height: 'calc(100vh - 100px)',
            width: '100vw'
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center gap-8 text-center text-2xl" style={{ minHeight: '520px' }}>
              {navigationMenuItems.map((item, index) => (
                <Link 
                  href={item.href} 
                  key={item.label}
                  onClick={closeMenu}
                  className="transition-all duration-500 hover:text-grape py-2"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.4s ease-in-out ${(index + 1) * 0.1}s forwards`
                  }}
                >
                  <span>{item.label}</span>
                </Link>
              ))}

              <Button 
                asChild 
                className="mt-4 transition-all duration-500"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.4s ease-in-out ${(navigationMenuItems.length + 1) * 0.1}s forwards`
                }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIms8oJTrhtAPoiyf4kaQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  Book an appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
