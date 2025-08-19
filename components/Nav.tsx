'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import LogoSVG from 'public/logo.svg';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

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

export function Nav() {
  const { elementRef: navRef, isVisible: navVisible } = useFadeIn({ threshold: 0.1 });

  return (
    <div 
      ref={navRef}
      className={`fade-in ${navVisible ? 'visible' : ''} flex h-[100px] items-center px-6 lg:px-10`}
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

      <Sheet>
        <SheetTrigger className="ml-auto lg:hidden">
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent
          className="flex h-screen w-screen items-center justify-center"
          side={'top'}
        >
          <div className="flex h-full flex-col justify-center gap-16 text-center text-2xl">
            {navigationMenuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <SheetTrigger>
                  <span>{item.label}</span>
                </SheetTrigger>
              </Link>
            ))}

            <Button asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Book an appointment
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
