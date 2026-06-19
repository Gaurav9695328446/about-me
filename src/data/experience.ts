export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: { start: string; end: string };
  location: string;
  current?: boolean;
  award?: string;
  awardDate?: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'truemeds',
    company: 'Truemeds',
    role: 'Acting Frontend Lead',
    duration: '2024 – Present',
    period: { start: '2024', end: 'Present' },
    location: 'Mumbai, India',
    current: true,
    technologies: [
      'Next.js', 'React Native', 'GraphQL', 'Redis', 'Strapi', 'Firebase', 'GitLab CI/CD',
      'Sentry', 'TypeScript', 'Zustand',
    ],
    achievements: [
      'Integrated Amazon Pay SDK and migrated cart sync from localStorage to backend – zero data loss across 5M+ MAU',
      'Architected Headless CMS (Strapi + GraphQL + Redis) slashing LCP from 4.2s → 1.8s (57% gain)',
      'Engineered coupon & upfront payment flows directly tied to revenue growth',
      'Built GitLab CI/CD pipeline with canary deployments – reduced release overhead by 80%',
      'Implemented A/B testing & feature flags via Firebase for fully decoupled experiments',
      'Established Sentry + Zenduty observability stack reducing mean time to detection (MTTD)',
      'Integrated Truecaller SDK in React Native improving new user acquisition',
      'Led architecture RFCs, fortnightly tech sessions, and sprint planning for 6-person frontend team',
    ],
  },
  {
    id: 'caw-studios',
    company: 'CAW Studios',
    role: 'Senior Software Engineer (SDE 3)',
    duration: '2022 – 2024',
    period: { start: '2022', end: '2024' },
    location: 'Mumbai, India',
    technologies: [
      'React', 'TypeScript', 'NX Monorepo', 'Bit', 'React Hook Form', 'Yup',
      'Atomic Design', 'Storybook', 'Webpack',
    ],
    achievements: [
      'Built metadata-driven no-code UI engine (React Hook Form + Yup) – saved 30% UI development time across teams',
      'Created tree-shakable Bit component library reducing bundle size by 20%',
      'Introduced NX Monorepo + Airbnb ESLint style guide + Atomic design pattern – boosted team efficiency by 20%',
    ],
  },
  {
    id: 'jp-tokyo',
    company: 'JP Tokyo India Pvt. Ltd.',
    role: 'Software Development Engineer 2',
    duration: '2019 – 2022',
    period: { start: '2019', end: '2022' },
    location: 'Mumbai, India',
    award: '⭐ Star Award',
    awardDate: 'Jul 2022 – Exemplary project delivery',
    technologies: [
      'React', 'React Native', 'Next.js', 'Redux', 'Zustand', 'AG Grid', 'Razorpay',
      'WebSockets', 'React Query', 'Bit', 'TypeScript',
    ],
    achievements: [
      'Built enterprise portal with React + AG Grid supporting virtualized tables for heavy data workloads',
      'Led Wardo (React Native) – B2C styling app with drag-and-drop canvas, real-time WebSockets, and Razorpay subscription flows',
      'Developed Budoy (Next.js) – football match management platform with real-time score updates via short-polling, React Query caching, and ISR/SSR/SSG strategies',
      'Maintained shared Bit component library (auth, i18n, routing, AG Grid wrappers) adopted across 4+ projects',
      'Designed Audit System with Zustand + virtualized lists handling 2000+ records – RBAC, inline edits, drag-and-drop, zero UI blocking',
      'Led Field Inspector (React Native) – offline-first with Redux Offline + Saga, photo uploads, and multi-level approval flows',
    ],
  },
  {
    id: 'brainy-surmount',
    company: 'BrainyDX / Surmount Softech',
    role: 'Software Engineer',
    duration: '2017 – 2019',
    period: { start: '2017', end: '2019' },
    location: 'India',
    technologies: [
      'WordPress', 'Next.js', 'AWS', 'Android', 'REST APIs', 'Yoast SEO', 'JavaScript',
    ],
    achievements: [
      'Developed WordPress & Next.js websites with full AWS (EC2/S3/Route 53) deployment pipelines',
      'Implemented on-page SEO optimizations using Yoast achieving top-5 rankings for target keywords',
      'Built Android application with REST API integration and offline data sync',
    ],
  },
];

export const education = {
  degree: 'B.Tech – Information Technology',
  institution: 'Rajkiye Engineering College, Azamgarh, UP',
  year: '2012 – 2016',
};
