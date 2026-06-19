export type ProjectCategory = 'Mobile' | 'Web' | 'System' | 'CMS' | 'Design System';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  category: ProjectCategory;
  highlights: string[];
  impact?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'truemeds-headless-cms',
    title: 'Headless CMS',
    description: 'Content platform powering marketing pages for 5M+ Truemeds users with sub-2s LCP.',
    longDescription:
      'Architected a headless CMS using Strapi, GraphQL, and Redis that serves dynamic marketing content across Truemeds\' web and mobile surfaces.',
    stack: ['Strapi', 'GraphQL', 'Redis', 'Next.js', 'TypeScript', 'CDN'],
    category: 'CMS',
    featured: true,
    highlights: [
      'LCP improved from 4.2s → 1.8s (57% faster)',
      'Redis caching reduced DB queries by 70%',
      'Content editors ship pages without developer involvement',
      '5M+ MAU served with 99.9% uptime',
    ],
    impact: 'LCP 4.2s → 1.8s · 5M+ MAU',
  },
  {
    id: 'wardo',
    title: 'Wardo',
    description: 'B2C React Native styling app with real-time collaboration, drag-and-drop canvas, and Razorpay subscription billing.',
    stack: ['React Native', 'WebSockets', 'Razorpay', 'Redux', 'Node.js'],
    category: 'Mobile',
    featured: true,
    highlights: [
      'Drag-and-drop canvas for outfit curation',
      'Real-time collaboration via WebSockets',
      'Razorpay subscription and one-time payment flows',
      'Optimistic UI updates for seamless UX',
    ],
    impact: 'Full B2C subscription lifecycle',
  },
  {
    id: 'budoy',
    title: 'Budoy',
    description: 'Next.js football match registration and management platform with real-time score updates and advanced caching.',
    stack: ['Next.js', 'React Query', 'TypeScript', 'ISR', 'SSR', 'SSG'],
    category: 'Web',
    featured: true,
    highlights: [
      'Real-time score updates via short-polling strategy',
      'Hybrid rendering: ISR for static pages, SSR for live matches, SSG for archives',
      'React Query for intelligent server state caching',
      'SEO-optimised match and team pages',
    ],
    impact: 'ISR/SSR/SSG hybrid · real-time scores',
  },
  {
    id: 'audit-system',
    title: 'Audit System',
    description: 'Heavy-data enterprise tool handling 2000+ records with virtual scrolling, RBAC, and Excel import.',
    stack: ['React', 'Zustand', 'AG Grid', 'TypeScript', 'RBAC'],
    category: 'System',
    featured: true,
    highlights: [
      'Virtual list rendering – zero UI blocking at 2000+ rows',
      'Role-based access control (RBAC) with 5 permission levels',
      'Drag-and-drop row reordering with instant persistence',
      'Inline edits with conflict resolution',
    ],
    impact: '2000+ records · zero blocking',
  },
  {
    id: 'no-code-ui-engine',
    title: 'No-Code UI Engine',
    description: 'Metadata-driven form & UI builder that lets product teams create complex flows without writing code.',
    stack: ['React', 'React Hook Form', 'Yup', 'TypeScript', 'JSON Schema'],
    category: 'System',
    highlights: [
      '30% reduction in UI development time',
      'JSON-schema driven – product teams own the config',
      'Supports 20+ field types with conditional logic',
      'Integrated validation engine with custom error messages',
    ],
    impact: '30% faster UI development',
  },
  {
    id: 'field-inspector',
    title: 'Field Inspector',
    description: 'Offline-first React Native inspection app with multi-level approvals and photo upload flows.',
    stack: ['React Native', 'Redux Offline', 'Redux Saga', 'REST APIs', 'SQLite'],
    category: 'Mobile',
    highlights: [
      'Offline-first with Redux Offline – works without connectivity',
      'Background sync when connection restores',
      'Multi-step approval workflows with push notifications',
      'Photo capture and upload with progress tracking',
    ],
    impact: 'Fully offline-capable inspection tool',
  },
  {
    id: 'bit-component-library',
    title: 'Design System / Bit Library',
    description: 'Shared tree-shakable component library with auth, i18n, routing, and AG Grid wrappers used across 4+ products.',
    stack: ['React', 'TypeScript', 'Bit', 'Storybook', 'Rollup'],
    category: 'Design System',
    highlights: [
      '20% bundle size reduction via tree-shaking',
      'Storybook documentation for every component',
      'Versioned releases with semantic versioning',
      'Adopted by 4+ products in the organisation',
    ],
    impact: '20% bundle reduction · 4+ products',
  },
];
