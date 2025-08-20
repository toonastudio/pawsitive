import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';
import { Poppins } from 'next/font/google';
import Analytics from './analytics';
import './globals.css';
import { defaultMetadata } from './metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: 'hsl(240 75% 98%)',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6f2da8" />
        <meta name="msapplication-TileColor" content="#603cba" />
      </head>

      <body
        // style={{
        //   textRendering: 'optimizeLegibility',
        // }}
        className={cn(
          poppins.className,
          'flex min-h-screen touch-manipulation flex-col',
        )}
      >
        <a href="#main" className="sr-only" aria-label="skip">
          skip to content
        </a>

        <Header />

        <main id="main" className="flex flex-grow flex-col">
          {children}
        </main>

        <Footer />

        <Toaster />

        <TailwindIndicator />
      </body>
      <Analytics />
    </html>
  );
}

const TailwindIndicator = () => {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black p-2 font-mono text-sm text-white">
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block 3xl:hidden">2XL</span>
      <span className="hidden 3xl:block">3XL</span>
    </div>
  );
};
