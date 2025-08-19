'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PlusCircleSVG from 'public/plus-circle.svg';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

const services = [
  {
    title: 'Overnight pet sitting',
    description:
      'Price is per night, your pets will be cared for in your own home. $6 for additional dog, $2 for additional cat. ',
  },
  {
    title: 'Drop-in care',
    description:
      'One hour of care that can include feedings, playtime, administering medicine, cleaning accidents, and potty breaks.',
  },
  {
    title: 'Dog walking',
    description:
      'Each walk will start at 30 minutes, an additional 30 minutes will cost $10. Walks will be provided around your neighborhood.',
  },
  {
    title: 'Adventure walk',
    description:
      'This service includes your pet care provider picking up your dog(s) and taking them to a local hiking trail. One hour of walking and exploring.',
  },
];

export default function Services() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useFadeIn();
  const { elementRef: titleRef, isVisible: titleVisible } = useFadeIn();
  const { elementRef: addonsRef, isVisible: addonsVisible } = useFadeIn();

  return (
    <section ref={sectionRef} id="services" className="flex py-12 md:py-20 xl:py-30">
      <div className="container flex w-full flex-col">
                    <h2
              ref={titleRef}
              className={`fade-in-up ${titleVisible ? 'visible' : ''}`}
            >
              Services
            </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => {
            const { elementRef: serviceRef, isVisible: serviceVisible } = useFadeIn({
              threshold: 0.1,
              rootMargin: `0px 0px -${50 + i * 20}px 0px`,
            });

            return (
              <div 
                key={service.title} 
                ref={serviceRef}
                className={`fade-in-up ${serviceVisible ? 'visible' : ''} flex flex-col items-start`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="10 10 40 20" // Adjusted viewBox to remove excess white space
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="33"
                    cy="20"
                    r="20"
                    fill="#7791EE"
                    fillOpacity="0.1" // Changed attribute name to camelCase
                  />
                  <circle
                    cx="30"
                    cy="20"
                    r="19.5"
                    stroke="#7791EE"
                    strokeOpacity="0.4" // Changed attribute name to camelCase
                  />
                  <ellipse
                    cx="22.9012"
                    cy="17.5464"
                    rx="2.05246"
                    ry="1.5932"
                    transform="rotate(15 22.9012 17.5464)"
                    fill="#7791EE"
                  />
                  <ellipse
                    cx="26.8328"
                    cy="13.5314"
                    rx="2.18123"
                    ry="2.18123"
                    fill="#7791EE"
                  />
                  <ellipse
                    cx="2.05246"
                    cy="1.5932"
                    rx="2.05246"
                    ry="1.5932"
                    transform="matrix(-0.965926 0.258819 0.258819 0.965926 38.6216 15.4762)"
                    fill="#7791EE"
                  />
                  <ellipse
                    cx="2.18123"
                    cy="2.18123"
                    rx="2.18123"
                    ry="2.18123"
                    transform="matrix(-1 0 0 1 35.3011 11.3502)"
                    fill="#7791EE"
                  />
                  <path
                    fillRule="evenodd" // Changed attribute name to camelCase
                    clipRule="evenodd" // Changed attribute name to camelCase
                    d="M37.4823 24.181C37.4823 21.0469 31.7702 17.1318 30.312 16.1833C30.1066 16.0497 29.8461 16.0497 29.6407 16.1833C28.1824 17.1318 22.4703 21.0469 22.4703 24.181C22.4703 26.5219 23.9459 28.6076 26.512 28.6076C28.3389 28.6076 29.9763 26.4905 29.9763 26.4905C29.9763 26.4905 31.6138 28.6076 33.4406 28.6076C36.0068 28.6076 37.4823 26.5219 37.4823 24.181Z"
                    fill="#7791EE"
                  />
                </svg>

                <div className="mt-2 service-title">{service.title}</div>
                <p className="mt-2">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 lg:flex-row">
          <Button className="w-full lg:w-auto" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Schedule appointment
            </a>
          </Button>

          <Button variant={'secondary'} className="w-full lg:w-auto" asChild>
            <Link href="service-list.pdf" target="_blank">
              View prices <ArrowRight className="ml-2 inline-block" />
            </Link>
          </Button>
        </div>

        <Separator className="my-8" style={{ backgroundColor: '#B7C4F2', opacity: 0.5 }} />

        <div ref={addonsRef}>
          <h4 className={`fade-in-up ${addonsVisible ? 'visible' : ''}`}>
            Add Ons
          </h4>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row">
            {[
              'Nail trim & file',
              'Enrichment activity',
              'Teeth brushing'
            ].map((addon, i) => {
              const { elementRef: addonRef, isVisible: addonVisible } = useFadeIn({
                threshold: 0.1,
                rootMargin: `0px 0px -${30 + i * 10}px 0px`,
              });

              return (
                <div 
                  key={addon}
                  ref={addonRef}
                  className={`fade-in-left ${addonVisible ? 'visible' : ''} flex items-center`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <PlusCircleSVG className="h-10" />
                  <p>{addon}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
