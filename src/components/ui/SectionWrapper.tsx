'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  delay = 0,
  direction = 'up',
}: SectionWrapperProps) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 32 : 0,
    x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
  };

  return (
    <section id={id} className={cn('section-padding', className)}>
      <motion.div
        initial={initial}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, delay, ease }}
        className={cn('container-site', innerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#d4af37' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-2xl"
          style={{ color: '#9ca3af', ...(centered ? { margin: '1rem auto 0' } : {}) }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
