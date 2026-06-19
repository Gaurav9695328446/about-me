'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personal } from '@/data/personal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent',
        )}
        style={{ '--color-navy-900': '#0d1520' } as React.CSSProperties}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Gaurav Kumar Arya – Home"
            >
              <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-sm font-bold text-[#0d1520] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-shadow">
                G
              </span>
              <span className="font-semibold text-white hidden sm:block">
                Gaurav<span className="text-gold">.</span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className={cn(
                        'px-4 py-2 text-sm rounded-lg transition-all duration-200 cursor-pointer',
                        isActive
                          ? 'text-gold bg-gold/10 font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-white/5',
                      )}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm rounded-lg border border-gold/40 text-gold hover:bg-gold hover:text-[#0d1520] hover:border-gold transition-all duration-200 font-medium"
              >
                Resume ↗
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex md:hidden"
          >
            {/* Backdrop */}
            <button
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            {/* Panel */}
            <div className="relative ml-auto w-72 h-full bg-[#0d1520] border-l border-white/8 flex flex-col pt-20 px-6 pb-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="w-full text-left px-4 py-3 text-base text-gray-300 hover:text-gold hover:bg-gold/5 rounded-lg transition-colors cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-4 py-2.5 rounded-xl border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-center font-medium"
              >
                Download Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
