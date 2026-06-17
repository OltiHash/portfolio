import type { Project, Skill, ExperienceItem, StatItem } from '@/types';

export const personalInfo = {
  name: 'Olti Hashani',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Open Source Contributor',
  ],
  bio: "I'm a passionate full-stack developer with 3+ years of experience crafting beautiful, performant web applications. I believe great software is as much about the experience as the functionality.",
  bioExtended:
    'Currently focused on building scalable applications with React and Node.js, with a deep interest in developer tooling, AI integration, and design systems that scale.',
  email: 'oltihashani3@gmail.com',
  location: 'Prishtina, Kosovo',
  github: 'https://github.com/OltiHash',
  linkedin: '',
  twitter: '',
};

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: 'React', icon: '⚛', level: 'Expert', color: 'blue' },
    { name: 'Next.js', icon: '▲', level: 'Expert', color: 'blue' },
    { name: 'TypeScript', icon: 'TS', level: 'Expert', color: 'blue' },
    { name: 'Tailwind CSS', icon: '✦', level: 'Expert', color: 'blue' },
    { name: 'JavaScript', icon: 'JS', level: 'Expert', color: 'blue' },
    { name: 'HTML / CSS', icon: '◈', level: 'Expert', color: 'blue' },
    { name: 'Framer Motion', icon: '◎', level: 'Advanced', color: 'blue' },
    { name: 'Three.js', icon: '3D', level: 'Intermediate', color: 'blue' },
  ],
  backend: [
    { name: 'Node.js', icon: '⬡', level: 'Expert', color: 'green' },
    { name: 'Express', icon: '⚡', level: 'Expert', color: 'green' },
    { name: 'PostgreSQL', icon: '◆', level: 'Advanced', color: 'green' },
    { name: 'Redis', icon: '◉', level: 'Advanced', color: 'green' },
    { name: 'GraphQL', icon: '◈', level: 'Advanced', color: 'green' },
    { name: 'REST APIs', icon: '⇄', level: 'Expert', color: 'green' },
    { name: 'MongoDB', icon: '◐', level: 'Advanced', color: 'green' },
    { name: 'Prisma', icon: '▣', level: 'Advanced', color: 'green' },
  ],
  uiux: [
    { name: 'Figma', icon: '◑', level: 'Advanced', color: 'purple' },
    { name: 'Design Systems', icon: '⊞', level: 'Advanced', color: 'purple' },
    { name: 'Prototyping', icon: '⬡', level: 'Advanced', color: 'purple' },
    { name: 'User Research', icon: '◎', level: 'Intermediate', color: 'purple' },
    { name: 'Responsive', icon: '⊡', level: 'Expert', color: 'purple' },
    { name: 'Accessibility', icon: '✦', level: 'Advanced', color: 'purple' },
  ],
  tools: [
    { name: 'Git', icon: '⑂', level: 'Expert', color: 'orange' },
    { name: 'Docker', icon: '⬡', level: 'Advanced', color: 'orange' },
    { name: 'AWS', icon: '☁', level: 'Advanced', color: 'orange' },
    { name: 'Vercel', icon: '▲', level: 'Expert', color: 'orange' },
    { name: 'CI / CD', icon: '⚙', level: 'Advanced', color: 'orange' },
    { name: 'Jest', icon: '◆', level: 'Advanced', color: 'orange' },
    { name: 'Webpack', icon: '◉', level: 'Intermediate', color: 'orange' },
    { name: 'Linux', icon: '◐', level: 'Advanced', color: 'orange' },
  ],
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'BuildAI',
    description:
      'AI-powered website builder SaaS — describe your site in plain English and get a fully functional, styled website in seconds.',
    longDescription:
      'BuildAI is a SaaS platform that lets anyone generate production-ready websites through natural language prompts. It combines LLM code generation with a live preview editor, allowing users to iteratively refine the output without writing a single line of code.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'OpenAI API', 'Vercel'],
    category: 'AI',
    liveUrl: 'https://aibuilder-phi.vercel.app',
    githubUrl: 'https://github.com/OltiHash/buildai',
    featured: true,
    features: [
      'Natural language to full website generation',
      'Live preview with iterative refinement',
      'Export clean, production-ready code',
      'Responsive layouts generated automatically',
      'Deployed and accessible via Vercel',
    ],
  },
  {
    id: '2',
    title: 'Developer Portfolio',
    description:
      'This portfolio — a cinematic, fully animated personal site built with Next.js 16, Tailwind v4, and Framer Motion.',
    longDescription:
      'A world-class developer portfolio featuring glassmorphism design, Framer Motion animations, an interactive terminal, particle effects, and a custom cursor. Built with Next.js 16 static export and deployed on Netlify.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Netlify'],
    category: 'Web',
    liveUrl: 'https://oltihash-portfolio.netlify.app',
    githubUrl: 'https://github.com/OltiHash/portfolio',
    featured: false,
    features: [
      'Glassmorphism dark UI with electric blue/purple accents',
      'Framer Motion entrance animations on every section',
      'Interactive terminal with real CLI commands',
      'Custom cursor and particle field effects',
      'Static export deployed to Netlify',
    ],
  },
  {
    id: '3',
    title: 'School Website',
    description:
      'Full-stack school website with a Node.js/Express backend, SQLite database, JWT-protected admin panel, and multi-page HTML/CSS/JS frontend.',
    longDescription:
      'A complete school website for Gjimnazi Matematikor built from scratch. The frontend is multi-page HTML, CSS, and JavaScript. The backend is a Node.js + Express REST API with a SQLite database, JWT authentication, and an admin dashboard for managing news and content.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'SQLite', 'JWT Auth'],
    category: 'Web',
    liveUrl: 'https://gjimnazimatematikor.com',
    githubUrl: 'https://github.com/OltiHash/gjsm-website',
    featured: false,
    features: [
      'Multi-page semantic HTML/CSS/JS frontend',
      'Node.js + Express REST API backend',
      'SQLite database for news and school data',
      'JWT-protected admin dashboard for content management',
      'bcryptjs password hashing for secure admin login',
      'Multer file uploads for media management',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    company: 'TechVision Labs',
    description:
      "Led development of the company's flagship SaaS platform, improving performance by 60% and building a design system used across 5 products.",
    type: 'work',
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Innovate Studio',
    description:
      'Built and shipped 3 client products from 0 to 1, including an e-commerce platform handling $2M in annual transactions.',
    type: 'work',
  },
  {
    year: '2022',
    title: 'Open Source Contributor',
    company: 'React Ecosystem',
    description:
      'Contributed to major open source projects including React Query and Next.js, with 1200+ GitHub stars on personal libraries.',
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'StartupX',
    description:
      'First engineering hire at an early-stage startup. Built the entire frontend from scratch, helping the product reach 10k active users.',
    type: 'work',
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    company: 'University of California',
    description:
      "Bachelor's in Computer Science with a focus on Human-Computer Interaction. Graduated with honors.",
    type: 'education',
  },
  {
    year: '2020',
    title: 'First Developer Role',
    company: 'Freelance',
    description:
      'Started the professional development journey building websites and apps for local businesses.',
    type: 'work',
  },
];

export const stats: StatItem[] = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Hours Coded', value: 5000, suffix: '+' },
  { label: 'Technologies', value: 30, suffix: '+' },
  { label: 'Happy Clients', value: 25, suffix: '+' },
];
