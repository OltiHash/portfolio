export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  features: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  color: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
