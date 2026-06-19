'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { personal } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionWrapper';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const articles = [
  {
    id: 'jira-plugin',
    title: 'JIRA + React.js + Next.js Integration',
    description:
      "A deep-dive into building a JIRA plugin using Atlassian's Forge platform with React and Next.js — covering authentication, API proxying, and custom UI components.",
    platform: 'Medium',
    url: 'https://medium.com/@gaurav_stark/jira-reactjs-nextjs-cfa6f6435b52',
    readTime: '8 min read',
    tag: 'Integrations',
    tagColor: '#60a5fa',
    icon: '📝',
  },
  {
    id: 'i18n-editing',
    title: 'Building In-Context i18n Editing',
    description:
      "A developer's guide to seamless translation management — building in-context i18n editing that lets translators work directly in the live UI without touching code.",
    platform: 'Dev.to',
    url: 'https://dev.to/gaurav9695328446/building-in-context-i18n-editing-a-developers-guide-to-seamless-translation-management-5di5',
    readTime: '12 min read',
    tag: 'i18n',
    tagColor: '#34d399',
    icon: '🌍',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <SectionHeading
              eyebrow="Writing"
              title="Thoughts on Frontend"
              subtitle="Deep dives, tutorials, and architecture notes from production experience."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex gap-3 flex-shrink-0 pb-12"
          >
            <a
              href={personal.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
            >
              <BookOpen size={14} />
              Medium
            </a>
            <a
              href={personal.links.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
            >
              <BookOpen size={14} />
              Dev.to
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card-hover rounded-2xl p-6 flex flex-col gap-4 h-full block"
                aria-label={`Read: ${article.title}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{article.icon}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        color: article.tagColor,
                        background: `${article.tagColor}18`,
                        border: `1px solid ${article.tagColor}30`,
                      }}
                    >
                      {article.tag}
                    </span>
                  </div>
                  <ExternalLink
                    size={16}
                    className="flex-shrink-0 mt-0.5 transition-colors group-hover:text-[#d4af37]"
                    style={{ color: '#4b5563' }}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="font-bold text-lg leading-tight mb-2 transition-colors group-hover:text-[#d4af37]"
                    style={{ color: '#ffffff' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {article.description}
                  </p>
                </div>

                <div
                  className="flex items-center justify-between text-xs pt-2"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#6b7280' }}
                >
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                  <span className="font-medium" style={{ color: article.tagColor }}>
                    {article.platform} →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm" style={{ color: '#6b7280' }}>
            More articles on{' '}
            <a href={personal.links.medium} target="_blank" rel="noopener noreferrer"
              className="hover:underline" style={{ color: '#d4af37' }}>Medium</a>
            {' '}and{' '}
            <a href={personal.links.devto} target="_blank" rel="noopener noreferrer"
              className="hover:underline" style={{ color: '#d4af37' }}>Dev.to</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
