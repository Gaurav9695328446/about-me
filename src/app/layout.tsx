import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://gaurav-arya.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gaurav Kumar Arya | Frontend Architect',
    template: '%s | Gaurav Kumar Arya',
  },
  description:
    'Senior Frontend Engineer & Architect with 9+ years building scalable UIs for 5M+ MAU products. Expert in React, Next.js, TypeScript, React Native, and performance optimization.',
  keywords: [
    'Frontend Architect',
    'Senior Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Performance Optimization',
    'Mumbai',
    'India',
    'Gaurav Kumar Arya',
    'Truemeds',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Gaurav Kumar Arya', url: siteUrl }],
  creator: 'Gaurav Kumar Arya',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Gaurav Kumar Arya – Portfolio',
    title: 'Gaurav Kumar Arya | Frontend Architect',
    description:
      'Senior Frontend Engineer & Architect with 9+ years building scalable UIs for 5M+ MAU products. React · Next.js · TypeScript · React Native.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gaurav Kumar Arya – Frontend Architect based in Mumbai, India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Kumar Arya | Frontend Architect',
    description:
      'Senior Frontend Engineer & Architect with 9+ years building scalable UIs for 5M+ MAU products.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gaurav Kumar Arya',
  url: siteUrl,
  jobTitle: 'Frontend Architect / Senior Software Engineer',
  description:
    'Senior Frontend Engineer & Architect with 9+ years building scalable React and Next.js applications.',
  worksFor: {
    '@type': 'Organization',
    name: 'Truemeds',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
  email: 'gauravmka24@gmail.com',
  sameAs: [
    'https://github.com/Gaurav9695328446',
    'https://linkedin.com/in/gaurav-kumar-arya',
    'https://leetcode.com/u/Gaurav-Stark/',
    'https://dev.to/gaurav9695328446',
    'https://medium.com/@gaurav_stark',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Rajkiye Engineering College, Azamgarh, Uttar Pradesh',
  },
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'React Native', 'GraphQL',
    'Frontend Architecture', 'Performance Optimization', 'Design Systems',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
