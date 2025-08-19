'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroDogIMG from 'public/hero-dog.webp';
import HeroPawSVG from 'public/hero-paw.svg';
import { Button } from './ui/button';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

export default function Landing() {
  const { elementRef: contentRef, isVisible: contentVisible } = useFadeIn();
  const { elementRef: imageRef, isVisible: imageVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="home" className="relative overflow-clip">
      <div className="container flex flex-col-reverse items-center lg:block">
        <div
          ref={contentRef}
          className={`fade-in-left ${contentVisible ? 'visible' : ''} mb-12 mt-0 flex flex-grow flex-col gap-6 md:mb-20 lg:mt-20 lg:max-w-[445px] xl:my-[120px] xl:max-w-[530px] 2xl:my-[164px] 2xl:max-w-[620px]`}
          id="hero-content"
        >
                      <h1 className="mt-6 text-pretty lg:mt-0">
              Caring for your pet like family
            </h1>
          <p className="text-base lg:text-lg">
            We treat your furry friend like one of our own, providing
            compassionate and attentive care. Enjoy hassle-free pet care with
            our convenient services and experienced professionals.
          </p>
          <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="w-full lg:w-auto"
            >
              <Button className="w-full lg:w-auto">Book an appointment</Button>
            </a>

            <Link href="#contact" className="w-full lg:w-auto">
              <Button variant={'secondary'} className="w-full lg:w-auto">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
                 <div
           ref={imageRef}
           className={`fade-in-right ${imageVisible ? 'visible' : ''} bottom-0 left-[52%] -z-[1] lg:absolute lg:left-[48%] lg:max-w-[530px] xl:max-w-[530px] 2xl:max-w-[620px]`}
           id="hero-image"
         >
           <div className="relative">
             <HeroPawSVG className="absolute -inset-x-6 bottom-0 -z-[1] lg:-inset-x-12" />
             <Image src={HeroDogIMG} alt="" priority quality={100} className="lg:scale-100 xl:scale-110 2xl:scale-120" />
           </div>
         </div>
      </div>
    </section>
  );
}
