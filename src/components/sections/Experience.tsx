'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Calendar } from 'lucide-react';
import { experiences, education } from '@/data/experience';
import Badge from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionWrapper';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeading
            eyebrow="Career Journey"
            title="9 Years of Crafting at Scale"
            subtitle="From junior engineer to frontend lead — a story of ownership, scale, and continuous growth."
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), rgba(212,175,55,0.2), transparent)', transform: 'translateX(-50%)' }} />
          {/* Left line (mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-px md:hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.4), rgba(212,175,55,0.2), transparent)' }} />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="glass-card-hover rounded-2xl p-6">
                      {/* Header */}
                      <div className={`flex items-start gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                            <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}>
                                Current
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-base mt-0.5" style={{ color: '#d4af37' }}>{exp.company}</p>
                          <div className={`flex items-center gap-3 mt-1 text-xs flex-wrap ${isLeft ? 'md:justify-end' : ''}`} style={{ color: '#6b7280' }}>
                            <span className="flex items-center gap-1"><Calendar size={11} />{exp.duration}</span>
                            <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Award */}
                      {exp.award && (
                        <div className={`flex items-center gap-2 mb-4 p-2.5 rounded-xl ${isLeft ? 'md:justify-end' : ''}`}
                          style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
                          <Award size={14} style={{ color: '#d4af37', flexShrink: 0 }} />
                          <span className="text-xs font-medium" style={{ color: '#d4af37' }}>
                            {exp.award} — {exp.awardDate}
                          </span>
                        </div>
                      )}

                      {/* Achievements */}
                      <ul className={`space-y-2 text-sm ${isLeft ? 'md:text-right' : ''}`} style={{ color: '#d1d5db' }}>
                        {exp.achievements.map((a, j) => (
                          <li key={j} className={`flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <span className="mt-1 flex-shrink-0 text-xs" style={{ color: '#d4af37' }}>▸</span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className={`flex flex-wrap gap-1.5 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 z-10"
                    style={{ transform: 'translateX(-50%)' }}>
                    <div className="w-4 h-4 rounded-full"
                      style={{ background: '#d4af37', border: '2px solid #0d1520', boxShadow: '0 0 12px rgba(212,175,55,0.5)' }} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-16 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
            🎓
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#d4af37' }}>Education</p>
            <h3 className="text-white font-semibold">{education.degree}</h3>
            <p className="text-sm mt-0.5" style={{ color: '#9ca3af' }}>
              {education.institution} · {education.year}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
