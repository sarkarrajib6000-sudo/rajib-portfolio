export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface StatsItem {
  label: string;
  value: string;
}
