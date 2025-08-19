'use client';
import { submitContactFormAction } from '@/lib/actions';
import Flower2SVG from '@/public/flower-pink_outline.svg';
import PawOutlineSVG from '@/public/paw-outline.svg';
import { Check, Loader2, X } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import Socials from './Socials';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useFadeIn } from '@/lib/hooks/useFadeIn';

export default function Contact() {
  const { elementRef: titleRef, isVisible: titleVisible } = useFadeIn();
  const { elementRef: formRef, isVisible: formVisible } = useFadeIn({ threshold: 0.2 });
  const { elementRef: socialsRef, isVisible: socialsVisible } = useFadeIn({ threshold: 0.3 });

  const handleSubmit = async (formData: FormData) => {
    return submitContactFormAction(formData).then(({ success }) => {
      if (success) {
        toast(
          <>
            <Check className="mr-2 h-4 w-4 text-green-500" />{' '}
            <p>Message sent!</p>
          </>,
        );
      } else {
        toast(
          <>
            <X className="mr-2 h-4 w-4 text-red-500" />{' '}
            <p>Message failed to send</p>
          </>,
        );
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-clip bg-grape md:px-10 py-20 text-monochrome-50 md:py-20 scroll-mt-24"
    >
      <PawOutlineSVG className="pointer-events-none absolute -left-5 top-20 md:left-10 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]" />
      <PawOutlineSVG className="pointer-events-none absolute -bottom-56 -right-24 md:-bottom-48 md:-right-5 lg:-bottom-72 h-[500px] w-[500px] lg:h-[680px] lg:w-[680px] -rotate-45" />
      <Flower2SVG className="pointer-events-none absolute right-2 top-16 md:right-16 h-[100px] w-[100px] lg:h-[125px] lg:w-[125px] opacity-50" />
      <div className="container flex flex-col items-center">
        <div 
          ref={titleRef}
          className={`fade-in-up ${titleVisible ? 'visible' : ''} text-center`}
        >
                      <h2 className="mb-4">
              Any questions?
            </h2>
          <p>Contact Pawsitive Pet Care today.</p>
        </div>

        <form
          ref={formRef}
          action={handleSubmit}
          className={`fade-in-up ${formVisible ? 'visible' : ''} z-10 mt-9 w-full max-w-[474px] space-y-6`}
          style={{ transitionDelay: '0.2s' }}
        >
          <Input
            name="name"
            id="name"
            placeholder="Name"
            type="text"
            min={2}
            required
          />
          <Input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            required
          />
          <Input
            name="subject"
            id="subject"
            min={2}
            placeholder="Subject"
            type="text"
            required
          />
          <Textarea
            name="body"
            id="body"
            placeholder="Message"
            required
            minLength={10}
          />

          <SubmitButton />
        </form>
        <div 
          ref={socialsRef}
          className={`fade-in-up ${socialsVisible ? 'visible' : ''} z-10 mt-9`}
          style={{ transitionDelay: '0.4s' }}
        >
          <Socials />
        </div>
      </div>
    </section>
  );
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-roledescription="submit button for contact form"
      className="w-full"
      variant={'submit'}
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? <Loader2 className="animate-spin" /> : 'Send message'}
    </Button>
  );
};
