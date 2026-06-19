import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ImpactSnapshot from '@/components/sections/ImpactSnapshot';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Gaurav Kumar Arya | Frontend Architect & Senior Software Engineer',
  description:
    'Portfolio of Gaurav Kumar Arya — Frontend Architect with 9+ years building React, Next.js, and React Native applications for 5M+ users. Based in Mumbai, India.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactSnapshot />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
