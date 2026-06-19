export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend Core',
    icon: 'Monitor',
    color: '#60a5fa',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Mobile',
    icon: 'Smartphone',
    color: '#34d399',
    skills: ['React Native', 'Expo', 'Redux Offline', 'React Navigation'],
  },
  {
    category: 'State & Data',
    icon: 'Database',
    color: '#f472b6',
    skills: ['Redux', 'Zustand', 'React Query', 'GraphQL', 'REST APIs', 'Redux Saga'],
  },
  {
    category: 'Performance',
    icon: 'Zap',
    color: '#d4af37',
    skills: ['Core Web Vitals', 'ISR / SSR / SSG', 'Redis Caching', 'Virtual Scrolling', 'Code Splitting', 'Tree Shaking'],
  },
  {
    category: 'Architecture',
    icon: 'Layers',
    color: '#a78bfa',
    skills: ['Atomic Design', 'Micro-frontends', 'NX Monorepo', 'Design Systems', 'RBAC', 'Headless CMS'],
  },
  {
    category: 'Testing & Quality',
    icon: 'CheckCircle',
    color: '#fb923c',
    skills: ['Jest', 'React Testing Library', 'ESLint', 'Prettier', 'Storybook', 'Lighthouse'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'GitBranch',
    color: '#38bdf8',
    skills: ['GitLab CI/CD', 'GitHub Actions', 'Vercel', 'AWS (S3, EC2)', 'Docker', 'Canary Deployments'],
  },
  {
    category: 'Observability',
    icon: 'Eye',
    color: '#ef4444',
    skills: ['Sentry', 'Zenduty', 'Firebase A/B Testing', 'Feature Flags', 'Datadog'],
  },
];

export const proficiencyTags = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'GraphQL', 'Redux', 'Zustand',
  'Tailwind CSS', 'Framer Motion', 'Node.js', 'Git', 'Figma',
];
