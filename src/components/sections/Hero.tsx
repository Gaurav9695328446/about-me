'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { personal, stats } from '@/data/personal';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 container-site flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Location badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] text-[#d4af37] text-sm">
              <MapPin size={12} />
              Mumbai, India · Available for Senior / Lead roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-white">Gaurav</span>{' '}
            <span className="text-gradient-gold">Kumar Arya</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={item} className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            Frontend Architect{' '}
            <span style={{ color: 'rgba(212,175,55,0.7)' }}>·</span>{' '}
            Senior Software Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p variants={item} className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            {personal.tagline} — crafting performant, accessible UIs that scale from zero to{' '}
            <span className="text-[#d4af37] font-semibold">5 million+ users</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={scrollToWork}
              className="px-8 py-3.5 rounded-xl bg-[#d4af37] text-[#0d1520] font-semibold text-base hover:bg-[#e8c84a] transition-colors shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              See My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-[rgba(212,175,55,0.35)] text-[#d4af37] hover:bg-[rgba(212,175,55,0.08)] transition-all font-medium text-base flex items-center gap-2"
            >
              Download Resume
              <span className="text-sm opacity-60">↗</span>
            </a>
          </motion.div>

          {/* Social quick links */}
          <motion.div variants={item} className="flex items-center gap-4 mt-1">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-gray-500 hover:text-[#d4af37] transition-colors"
            >
              {personal.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="glass-card rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={scrollToWork}
          className="mt-12 flex flex-col items-center gap-2 text-gray-500 hover:text-[#d4af37] transition-colors cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent group-hover:from-[#d4af37] transition-colors" />
        </motion.button>
      </div>
    </section>
  );
}
