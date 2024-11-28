import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Include Atomic CSS files
import './css/atoms.css';
import './css/molecules.css';
import './css/organisms.css';
import './css/pages.css';
import './css/templates.css';

// Animate CSS files
import 'animate.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gradient-to-r from-[#26C2B9] to-[#288BE7]`}>
        {/* Navbar */}
        <Navbar />
        {/* Content */}
        {children}
        {/* Portal */}
        <div id="portal-root"></div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
