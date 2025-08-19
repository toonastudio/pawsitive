'use client';
import FlowerSVG from 'public/flower.svg';
import HeartSVG from 'public/heart_purple.svg';
import StarSVG from 'public/star_purple.svg';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

const features = [
      {
      illustration: <HeartSVG className="h-20 md:h-32" />,
      title: 'Personalized care',
      description:
        "Curate your pet's care to their specific needs with personalized plans, grooming services, and more.",
    },
    {
      illustration: <FlowerSVG className="h-20 md:h-32" />,
      title: 'Peace of mind',
      description:
        'Enjoy hassle-free pet care with online scheduling and other convenient services.',
    },
    {
      illustration: <StarSVG className="h-20 md:h-32" />,
      title: 'Expert guidance',
      description:
        'Get professional advice and guidance on all aspects of pet care, from nutrition to behavior.',
    },
];

export default function Features() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useFadeIn();

  return (
    <section ref={sectionRef} id="features" className="flex bg-primary/10 md:px-10 py-20">
      <div className="container flex flex-col items-center gap-10 lg:gap-[100px] lg:flex-row">
        {features.map((feature, i) => {
          const { elementRef: featureRef, isVisible: featureVisible } = useFadeIn({
            threshold: 0.1,
            rootMargin: `0px 0px -${50 + i * 20}px 0px`,
          });

          // Different animation classes for each feature
          const animationClasses = [
            'fade-in-left',    // First feature slides in from left
            'fade-in-up',      // Second feature slides up
            'fade-in-right'    // Third feature slides in from right
          ];

          return (
            <div
              key={i}
              ref={featureRef}
              className={`${animationClasses[i]} ${featureVisible ? 'visible' : ''} flex max-w-[394px] flex-col items-center text-center`}
              style={{ transitionDelay: `${i * 0.3}s` }}
            >
              {feature.illustration}
              <h3 className="mt-2">{feature.title}</h3>
              <p className="mt-6">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
