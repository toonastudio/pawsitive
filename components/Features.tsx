'use client';
import FlowerSVG from 'public/flower.svg';
import HeartSVG from 'public/heart.svg';
import StarSVG from 'public/star.svg';

const features = [
  {
    illustration: <HeartSVG className="h-32" />,
    title: 'Personalized care',
    description:
      "Curate your pet's care to their specific needs with personalized plans, grooming services, and more.",
  },
  {
    illustration: <FlowerSVG className="h-32" />,
    title: 'Peace of mind',
    description:
      'Enjoy hassle-free pet care with online scheduling and other convenient services.',
  },
  {
    illustration: <StarSVG className="h-32" />,
    title: 'Expert guidance',
    description:
      'Get professional advice and guidance on all aspects of pet care, from nutrition to behavior.',
  },
];

export default function Features() {
  return (
    <section id="features" className="flex bg-primary/10 px-5 py-12">
      <div className="container flex flex-col items-center gap-[100px] lg:flex-row">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex max-w-[394px] flex-col items-center text-center"
          >
            {feature.illustration}
            <h2 className="mt-2 text-[28px] lg:text-3xl font-semibold">{feature.title}</h2>
            <p className="mt-6 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
