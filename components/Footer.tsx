'use client';

import PawsitiveSVG from 'public/pawsitive.svg';
import Socials from './Socials';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

export default function Footer() {
  const { elementRef: footerRef, isVisible: footerVisible } = useFadeIn({ threshold: 0.1 });

  return (
    <footer 
      ref={footerRef}
      className={`fade-in-up ${footerVisible ? 'visible' : ''} bg-[#131334]`}
    >
      <div className="container flex w-full flex-col items-center justify-center gap-9 py-9 lg:flex-row">
        <PawsitiveSVG className="h-12" />

        <p className="text-center text-sm text-gray-50 lg:mr-auto">
          Copyright &copy; {new Date().getFullYear()} Pawsitive Pet Care, LLC.{' '}
          <br className="lg:hidden" />
          All rights reserved.
        </p>

        <div className="flex items-center justify-center">
          <Socials />
        </div>
      </div>

      <div className="text-center">
        <p className="py-5 text-white">
          Website designed by{' '}
          <a
            href="https://toona.studio"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Toona ✦ Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
