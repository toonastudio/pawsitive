'use client';

import { Tabs } from '@radix-ui/react-tabs';
import Link from 'next/link';
import CheckSVG from 'public/check.svg';
import DoubleStarSVG from 'public/double-star-pink.svg';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Separator } from './ui/separator';
import { TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

const puppyTrainingOptions = [
  {
    title: 'Training Evaluation',
    price: '$20',
    description:
      'Professional trainer Amanda will meet with you and your dog to discuss your goals and create a training plan.',
  },
  {
    title: 'Single Training Session',
    price: '$45',
    description: 'One hour personalized training session.',
  },
  {
    title: 'Training Package',
    price: '$150',
    description: 'Four one hour personalized training sessions.',
  },
  {
    title: 'Ultimate Puppy Package',
    price: '$500',
    description:
      'Eight sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it. Potty and crate training as well as enrichment activities are also included. 10 FREE Drop-in care sessions, plus 25% off overnight pet sitting for 8 weeks.',
  },
  {
    title: 'Premium Puppy Package',
    price: '$340',
    description:
      'Six sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it. Potty and crate training as well as enrichment activities are also included. 5 FREE Drop-in care sessions, plus 25% off overnight pet sitting for 6 weeks.',
  },
  {
    title: 'Traditional Puppy Package',
    price: '$235',
    description:
      'Six sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it.',
  },
];

const puppyPackages = [
  {
    title: 'Traditional Training Package',
    price: '$220',
    duration: '/6 sessions',
    includes: [
      'Skills: sit, stay, lay down, come, place, touch',
      'Potty and crate training',
    ],
    excludes: ['+5 drop-in visits', '+25% off overnight pet sitting'],
    cta: 'Schedule traditional training',
  },
  {
    title: 'Premium Training Package',
    price: '$335',
    duration: '/6 sessions',
    includes: [
      'Skills: sit, stay, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
      '+5 drop-in visits',
    ],
    excludes: ['+25% off overnight pet sitting'],
    cta: 'Schedule premium training',
  },
  {
    title: 'Ultimate Training Package',
    price: '$500',
    duration: '/8 sessions',
    includes: [
      'Skills: sit, stay, lay down, come, place, touch, heel',
      'Potty and crate training',
      'Enrichment activity',
      '+8 drop-in visits',
      '+25% off overnight pet sitting',
    ],
    excludes: [],
    cta: 'Schedule ultimate training',
  },
];

const adultPackages = [
  {
    title: 'Training Package',
    price: '$155',
    duration: '/4 sessions',
    includes: [
      'Skills: sit, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
      '+5 drop-in visits',
    ],
    excludes: ['+25% off overnight pet sitting'],
    cta: 'Schedule premium training',
  },
  {
    title: 'Training Package Plus',
    price: '$250',
    duration: '/5 sessions',
    includes: [
      'Skills: sit, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
      '+5 drop-in visits',
    ],
    excludes: ['+25% off overnight pet sitting'],
    cta: 'Schedule premium training',
  },
];

const Breadcrumb = ({ selected }: { selected: boolean }) => {
  return (
    <svg
      className="h-6 w-6 text-primary"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_11773)">
        <path
          d="M7.58859 13.103C7.63312 10.9284 7.84828 9.27039 9.30316 7.50809C11.002 5.45027 12.8935 4.48313 15.5497 4.73846C18.6238 5.03395 20.963 5.39844 22.5971 9.32714C24.4354 13.7467 21.3124 19.1618 16.5819 19.8931C12.4441 20.5328 7.50286 17.2891 7.58859 13.103Z"
          fill="#F22078"
          fillOpacity={selected ? '0.5' : '0.1'}
        />
        <g opacity="0.5">
          <path
            d="M4.7087 13.103C4.75324 10.9284 4.96839 9.27039 6.42328 7.50809C8.12211 5.45027 10.0136 4.48313 12.6698 4.73846C15.7439 5.03395 18.0831 5.39844 19.7172 9.32714C21.5555 13.7467 18.4325 19.1618 13.7021 19.8931C9.56425 20.5328 4.62297 17.2891 4.7087 13.103Z"
            stroke="#F22078"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_39_11773">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.199951)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function Packages() {
  const { elementRef: titleRef, isVisible: titleVisible } = useFadeIn();
  const { elementRef: tabsRef, isVisible: tabsVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <>
      <section id="packages" className="bg-[#f6f6fe] py-12 md:py-20 xl:py-30">
        <div className="container flex flex-col items-center">
          <div 
            ref={titleRef}
            className={`fade-in-up ${titleVisible ? 'visible' : ''} relative`}
          >
            <DoubleStarSVG className="absolute -right-20 -top-3 h-16 w-16 text-primary" />

            <h2 className="text-center">
              Prices & <br className="lg:hidden" />
              packages
            </h2>
          </div>
          <Tabs
            ref={tabsRef}
            defaultValue="puppy"
            className={`fade-in-up ${tabsVisible ? 'visible' : ''} flex flex-col items-center lg:mt-12 lg:w-auto`}
            style={{ transitionDelay: '0.2s' }}
          >
            <TabsList className="mt-5">
              <TabsTrigger value="puppy">Puppy</TabsTrigger>
              <TabsTrigger value="adult">Adult</TabsTrigger>
            </TabsList>
            <TabsContent value="puppy">
              <div className="flex w-full max-w-7xl flex-col justify-center gap-6 lg:flex-row">
                {puppyPackages.map((item, i) => {
                  const { elementRef: cardRef, isVisible: cardVisible } = useFadeIn({
                    threshold: 0.1,
                    rootMargin: `0px 0px -${50 + i * 20}px 0px`,
                  });

                  return (
                    <Card 
                      key={i}
                      ref={cardRef}
                      className={`fade-in-up ${cardVisible ? 'visible' : ''}`}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      <CardHeader>
                        <h2 className="text-lg font-bold" style={{ color: '#532BA8' }}>
                          {item.title}
                        </h2>
                      </CardHeader>

                      <CardContent>
                        <div>
                          <strong className="text-2xl font-extrabold">
                            {item.price}
                          </strong>
                          <span style={{ color: '#6A6F7C' }}>{item.duration}</span>
                        </div>

                        <Separator className="my-4" />

                        <div>
                          <ul className="list-inside space-y-3">
                            {item.includes.map((include, i) => (
                              <li key={i} className="flex items-center">
                                {' '}
                                <CheckSVG className="mr-2 h-5 w-5 text-primary" />{' '}
                                {include}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="mt-4 justify-center">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button variant="secondary">{item.cta}</Button>
                        </a>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="adult">
              <div className="flex w-full max-w-7xl flex-col justify-center gap-6 lg:flex-row">
                {adultPackages.map((item, i) => {
                  const { elementRef: cardRef, isVisible: cardVisible } = useFadeIn({
                    threshold: 0.1,
                    rootMargin: `0px 0px -${50 + i * 20}px 0px`,
                  });

                  return (
                    <Card 
                      key={i}
                      ref={cardRef}
                      className={`fade-in-up ${cardVisible ? 'visible' : ''}`}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      <CardHeader>
                        <h2 className="text-lg font-bold" style={{ color: '#532BA8' }}>
                          {item.title}
                        </h2>
                      </CardHeader>

                      <CardContent>
                        <div>
                          <strong className="text-2xl font-extrabold">
                            {item.price}
                          </strong>
                          <span style={{ color: '#6A6F7C' }}>{item.duration}</span>
                        </div>

                        <Separator className="my-4" />

                        <div>
                          <ul className="list-inside space-y-3">
                            {item.includes.map((include, i) => (
                              <li key={i} className="flex items-center">
                                <CheckSVG className="mr-2 h-5 w-5 text-primary" />
                                {include}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="mt-4 justify-center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform">
                          <Button variant="secondary">{item.cta}</Button>
                        </a>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          <Link
            href="service-list.pdf"
            className="mt-12"
            rel="noreferrer"
            target="_blank"
          >
            <Button>Complete package list</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
