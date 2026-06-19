'use client';

import { motion } from 'framer-motion';
import {
  Monitor, Smartphone, Database, Zap, Layers,
  CheckCircle, GitBranch, Eye,
} from 'lucide-react';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionWrapper';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const iconMap = { Monitor, Smartphone, Database, Zap, Layers, CheckCircle, GitBranch, Eye };

const proficiencyTags = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'GraphQL', 'Redux', 'Zustand',
  'Tailwind CSS', 'Framer Motion', 'Node.js', 'Git', 'Figma',
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills & Technologies"
            subtitle="Built across years of production experience — each tool battle-tested at scale."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
              >
                <div className="glass-card-hover rounded-2xl p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${group.color}18` }}>
                      {Icon && <Icon size={17} style={{ color: group.color }} />}
                    </div>
                    <h3 className="text-white text-sm font-semibold">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2.5 py-1 rounded-lg text-xs transition-colors cursor-default"
                        style={{
                          color: '#d1d5db',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Primary proficiencies strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 p-6 rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4af37' }}>
            Primary Proficiencies
          </p>
          <div className="flex flex-wrap gap-2">
            {proficiencyTags.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.25)',
                  color: '#d4af37',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#d4af37' }} />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
