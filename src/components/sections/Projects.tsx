'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects, type ProjectCategory } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionWrapper';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categoryColors: Record<string, 'default' | 'gold' | 'blue' | 'green' | 'pink'> = {
  Mobile: 'green',
  Web: 'blue',
  System: 'gold',
  CMS: 'pink',
  'Design System': 'default',
};

const filterTabs: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'System', value: 'System' },
  { label: 'CMS', value: 'CMS' },
  { label: 'Design', value: 'Design System' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects That Shipped"
            subtitle="A selection of products and systems I've built, led, or architected."
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterTabs.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                activeFilter === value
                  ? { background: '#d4af37', color: '#0d1520' }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      color: '#9ca3af',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const colorVariant = categoryColors[project.category] ?? 'default';

  return (
    <article
      className="group glass-card-hover rounded-2xl p-6 h-full flex flex-col"
      aria-label={`Project: ${project.title}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <Badge variant={colorVariant} className="mb-2">{project.category}</Badge>
          <h3 className="text-white font-bold text-xl group-hover:text-[#d4af37] transition-colors">
            {project.title}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg transition-colors"
            style={{ color: '#6b7280' }}
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className="text-sm leading-relaxed mb-4 flex-shrink-0" style={{ color: '#9ca3af' }}>
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-4 flex-1">
        {project.highlights.slice(0, 3).map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#9ca3af' }}>
            <span className="mt-0.5 flex-shrink-0" style={{ color: '#d4af37' }}>✓</span>
            {h}
          </li>
        ))}
      </ul>

      {project.impact && (
        <div className="mb-4 px-3 py-1.5 rounded-xl text-xs font-medium"
          style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)', color: '#d4af37' }}>
          📈 {project.impact}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
