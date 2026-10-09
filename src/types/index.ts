export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  repoUrl: string;
  stars: number;
  forks: number;
  issuesCount: number;
  languages: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  mentors: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'platinum' | 'gold' | 'silver';
  website: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Contributor {
  rank: number;
  name: string;
  githubUsername: string;
  avatarUrl: string;
  prsMerged: number;
  points: number;
  badges: string[];
}

export interface Stats {
  contributors: string;
  projects: string;
  sponsors: string;
  countries: string;
}
