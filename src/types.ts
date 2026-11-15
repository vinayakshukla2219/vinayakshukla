export interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  status: 'In Development' | 'Exploration & Prototyping' | 'Active Research';
  statusColor: 'cyan' | 'red';
  githubUrl?: string; // Clearly labeled placeholder if not available
  demoUrl?: string;
  category: 'Autonomous Systems' | 'AI & Environmental Intelligence';
}

export interface SkillCategory {
  title: string;
  description: string;
  accent: 'blue' | 'red';
  skills: {
    name: string;
    levelDescription: string;
    focus: string;
  }[];
}

export interface CertificateData {
  title: string;
  recipient: string;
  workshop: string;
  duration: string;
  dates: string;
  location: string;
  conductedBy: string;
  certificateId: string;
  imageSrc: string;
  description: string;
}

export interface WorkshopPhotoData {
  title: string;
  caption: string;
  event: string;
  venue: string;
  dates: string;
  imageSrc: string;
}
