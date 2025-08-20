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

        <p className="text-center text-sm text-gray-50 lg:mr-auto opacity-50">
          Copyright &copy; {new Date().getFullYear()} Pawsitive Pet Care, LLC.{' '}
          <br className="lg:hidden" />
          All rights reserved.
        </p>

        <div className="flex items-center justify-center">
          <Socials />
        </div>
      </div>

      <div className="text-center">
        <p className="py-5 text-white text-xs flex items-center justify-center gap-1">
          <span>Website designed by</span>
          <a
            href="https://toona.studio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
          >
            <img 
              src="/toona-studio-logo.svg" 
              alt="Toona Studio" 
              className="h-6 max-h-3"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
