import { InstagramIcon } from 'lucide-react';
import Image from 'next/image';

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-6 text-white">
      <a
        href="https://www.instagram.com/pawsitivepet.care/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:opacity-80"
      >
        <InstagramIcon />
        <span className="sr-only">instagram</span>
      </a>

      <a
        href="https://www.facebook.com/pawsitivepetcareinfo"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:opacity-80"
      >
        <Image src="/icon_fb.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6" />
        <span className="sr-only">facebook</span>
      </a>

      <a href="tel:+1-585-210-2385" className="transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:opacity-80">
        <Image src="/icon_phone.svg" alt="Phone" width={24} height={24} className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6" />
        <span className="sr-only">phone</span>
      </a>

      <a href="mailto:info.pawsitivepetcare@gmail.com" className="transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:opacity-80">
        <Image src="/icon_mail.svg" alt="Email" width={24} height={24} className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6" />
        <span className="sr-only">e-mail</span>
      </a>
    </div>
  );
}
