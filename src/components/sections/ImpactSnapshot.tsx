'use client';

import { motion } from 'framer-motion';
import { Users, Zap, GitBranch, Code2 } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { impactMetrics } from '@/data/personal';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const iconMap = { Users, Zap, GitBranch, Code2 };

const cardColors = [
  { border: 'rgba(212,175,55,0.25)', glow: 'rgba(212,175,55,0.06)' },
  { border: 'rgba(96,165,250,0.25)', glow: 'rgba(96,165,250,0.06)' },
  { border: 'rgba(52,211,153,0.25)', glow: 'rgba(52,211,153,0.06)' },
  { border: 'rgba(244,114,182,0.25)', glow: 'rgba(244,114,182,0.06)' },
];

export default function ImpactSnapshot() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" aria-label="Impact metrics">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#d4af37' }}>
            By the numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Real Impact, Real Scale</h2>
          <p className="mt-3 text-lg" style={{ color: '#9ca3af' }}>
            Measurable results across 9+ years of building production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactMetrics.map((metric, i) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            const colors = cardColors[i % cardColors.length];

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div
                  className="relative rounded-2xl p-6 h-full flex flex-col gap-4 overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px 5px ${colors.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${metric.color}18` }}
                  >
                    {Icon && <Icon size={20} style={{ color: metric.color }} />}
                  </div>

                  <div>
                    <p className="text-4xl font-bold leading-none" style={{ color: metric.color }}>
                      <AnimatedCounter target={metric.number} suffix={metric.suffix} />
                    </p>
                    <p className="text-white font-semibold mt-2 text-sm">{metric.label}</p>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#6b7280' }}>
                      {metric.description}
                    </p>
                  </div>

                  <div
                    className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20 blur-lg"
                    style={{ background: metric.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
