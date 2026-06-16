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
    title: 'NeuralDash',
    description:
      'AI-powered analytics dashboard with real-time insights, predictive modeling, and cinematic data visualizations built for enterprise teams.',
    longDescription:
      'NeuralDash is a comprehensive analytics platform that leverages machine learning to surface actionable insights from complex datasets. Built for teams that need to make data-driven decisions fast, it combines real-time streaming data with predictive models to forecast trends before they happen.',
    tech: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL', 'Redis'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    features: [
      'Real-time data streaming with WebSocket connections',
      'ML-powered anomaly detection and trend forecasting',
      'Customizable dashboard with drag-and-drop widgets',
      'Multi-tenant architecture with role-based access control',
      'Export to PDF, CSV, and PNG formats',
    ],
  },
  {
    id: '2',
    title: 'CodeCollab',
    description:
      'Real-time collaborative code editor with live execution, video calling, and AI-powered code completion for distributed engineering teams.',
    longDescription:
      'CodeCollab reimagines pair programming for distributed teams. With sub-10ms sync using CRDTs, integrated video calling, and AI-assisted completions, it makes remote collaboration feel as natural as sitting side by side.',
    tech: ['React', 'Node.js', 'CRDTs', 'WebRTC', 'Monaco Editor', 'Socket.io'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    features: [
      'Sub-10ms real-time sync using CRDT algorithms',
      'Built-in video and audio communication via WebRTC',
      'AI code completion powered by GPT-4',
      'Support for 50+ programming languages',
      'Version history and full session replay',
    ],
  },
  {
    id: '3',
    title: 'FlowForge',
    description:
      'Visual no-code workflow automation builder with 200+ integrations and AI-generated automation suggestions for business teams.',
    longDescription:
      'FlowForge empowers non-technical users to automate complex business workflows through an intuitive visual interface. The platform connects 200+ popular services and uses AI to suggest automation opportunities based on the tools teams already use.',
    tech: ['React', 'TypeScript', 'Node.js', 'Bull MQ', 'PostgreSQL', 'Docker'],
    category: 'Tools',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    features: [
      '200+ pre-built service integrations',
      'Visual drag-and-drop workflow builder',
      'AI-powered automation suggestions',
      'Advanced scheduling and event-based triggers',
      'Real-time execution logs and visual debugger',
    ],
  },
  {
    id: '4',
    title: 'DataPulse',
    description:
      'Open-source real-time data visualization library for React with 30+ animated chart types, WebGL rendering, and zero-config setup.',
    longDescription:
      'DataPulse is a high-performance visualization library built for React applications that demand beautiful, animated charts without sacrificing performance. It uses WebGL for rendering, enabling smooth 60fps animations even with millions of data points.',
    tech: ['React', 'TypeScript', 'WebGL', 'D3.js', 'Canvas API'],
    category: 'Web',
    githubUrl: '#',
    featured: false,
    features: [
      'WebGL-powered rendering for 60fps animations',
      '30+ chart types out of the box',
      'Fully customizable via CSS variables',
      'Accessible by default with screen reader support',
      '15KB gzipped core bundle size',
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
