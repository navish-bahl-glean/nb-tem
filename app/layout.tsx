import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Navish Bahl — Technical Enablement Manager at Glean',
  description: 'Making the case for the Technical Enablement Manager role at Glean. Why TEM? Why now? Why me?',
  openGraph: {
    title: 'Navish Bahl — Technical Enablement Manager at Glean',
    description: 'A case for the TEM role — built by Navish Bahl, Stellar SE at Glean.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} font-sans antialiased h-full bg-[#05091A] text-white`}>
        {children}
      </body>
    </html>
  );
}
