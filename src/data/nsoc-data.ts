import { Project, TimelineEvent, Sponsor, FAQ, Contributor, Stats } from '../types';

export const programStats: Stats = {
  contributors: "3,500+",
  projects: "50+",
  sponsors: "12+",
  countries: "6+"
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Registration Opens",
    date: "October 10, 2026",
    description: "Begin your open-source journey by registering on the portal and exploring projects.",
    status: "upcoming"
  },
  {
    id: "2",
    title: "Winter Coding Phase Starts",
    date: "October 15, 2026",
    description: "Coding phase begins! Start claiming issues, interacting with mentors, and making pull requests.",
    status: "upcoming"
  },
  {
    id: "3",
    title: "Mid-Term Review",
    date: "November 20, 2026",
    description: "Mentors evaluate contributions so far. High-quality PRs get approved and leaderboard points sync.",
    status: "upcoming"
  },
  {
    id: "4",
    title: "Winter Coding Phase Ends",
    date: "December 30, 2026",
    description: "Last day to merge pull requests. All contributions are locked for final reviews.",
    status: "upcoming"
  },
  {
    id: "5",
    title: "Results & Swag Distribution",
    date: "January 10, 2027",
    description: "Announcement of top performers. Certificates, Letters of Recommendation, and exclusive winter swags are dispatched.",
    status: "upcoming"
  }
];

export const nsocProjects: Project[] = [
  {
    id: "1",
    title: "Snowbound Core",
    description: "A fast, lightweight decentralized asset-sharing protocol written in Rust, optimized for cold-storage synchronization.",
    category: "Web & Core Systems",
    repoUrl: "https://github.com/nsoc-winter/snowbound",
    stars: 124,
    forks: 42,
    issuesCount: 15,
    languages: ["Rust", "WebAssembly", "TypeScript"],
    difficulty: "Advanced",
    mentors: ["Alex Frost", "Elena Frost"]
  },
  {
    id: "2",
    title: "Aurora-UI",
    description: "A gorgeous, highly performant component library reflecting winter aesthetics, fully accessible and built on top of Radix primitives.",
    category: "Frontend Development",
    repoUrl: "https://github.com/nsoc-winter/aurora-ui",
    stars: 342,
    forks: 88,
    issuesCount: 22,
    languages: ["TypeScript", "React", "Tailwind CSS"],
    difficulty: "Beginner",
    mentors: ["Srushti R.", "Oweshrza R."]
  },
  {
    id: "3",
    title: "GlacierDB",
    description: "An embedded, high-performance time-series database designed specifically for low-temperature IoT sensors and environmental monitoring.",
    category: "Database & Backend",
    repoUrl: "https://github.com/nsoc-winter/glacier-db",
    stars: 89,
    forks: 18,
    issuesCount: 8,
    languages: ["Go", "C++", "SQL"],
    difficulty: "Advanced",
    mentors: ["Abhinav A.", "Karthik N."]
  },
  {
    id: "4",
    title: "Frostbite CLI",
    description: "A lightning-fast developer workspace companion that automates local sandbox environments, git branching patterns, and template injection.",
    category: "DevOps & Tooling",
    repoUrl: "https://github.com/nsoc-winter/frostbite-cli",
    stars: 156,
    forks: 24,
    issuesCount: 11,
    languages: ["TypeScript", "Node.js", "Shell"],
    difficulty: "Intermediate",
    mentors: ["Niklaus M.", "Sarah C."]
  },
  {
    id: "5",
    title: "Ice-Predict AI",
    description: "A neural-network model trained to predict winter precipitation and snowfall patterns using real-time global weather satellite APIs.",
    category: "AI & Data Science",
    repoUrl: "https://github.com/nsoc-winter/ice-predict",
    stars: 210,
    forks: 56,
    issuesCount: 14,
    languages: ["Python", "PyTorch", "Pandas"],
    difficulty: "Intermediate",
    mentors: ["Dr. Evelyn Stone", "Rajesh K."]
  },
  {
    id: "6",
    title: "Tundra Auth",
    description: "An open-source, passwordless authentication provider implementing WebAuthn, passkeys, and multi-factor biometric checks.",
    category: "Security & Cloud",
    repoUrl: "https://github.com/nsoc-winter/tundra-auth",
    stars: 178,
    forks: 39,
    issuesCount: 7,
    languages: ["TypeScript", "Go", "WebAuthn"],
    difficulty: "Intermediate",
    mentors: ["Liam Winters", "Aarav S."]
  }
];

export const sponsorsList: Sponsor[] = [
  {
    id: "1",
    name: "GitHub",
    logoUrl: "/sponsors/github.svg",
    tier: "platinum",
    website: "https://github.com"
  },
  {
    id: "2",
    name: "Vercel",
    logoUrl: "/sponsors/vercel.svg",
    tier: "platinum",
    website: "https://vercel.com"
  },
  {
    id: "3",
    name: "Resend",
    logoUrl: "/sponsors/resend.svg",
    tier: "gold",
    website: "https://resend.com"
  },
  {
    id: "4",
    name: "Sentry",
    logoUrl: "/sponsors/sentry.svg",
    tier: "gold",
    website: "https://sentry.io"
  },
  {
    id: "5",
    name: "Docker",
    logoUrl: "/sponsors/docker.svg",
    tier: "gold",
    website: "https://docker.com"
  },
  {
    id: "6",
    name: "MongoDB",
    logoUrl: "/sponsors/mongodb.svg",
    tier: "silver",
    website: "https://mongodb.com"
  },
  {
    id: "7",
    name: "Supabase",
    logoUrl: "/sponsors/supabase.svg",
    tier: "silver",
    website: "https://supabase.com"
  },
  {
    id: "8",
    name: "Postman",
    logoUrl: "/sponsors/postman.svg",
    tier: "silver",
    website: "https://postman.com"
  }
];

export const leaderboardData: Contributor[] = [
  {
    rank: 1,
    name: "Yashvardhan S.",
    githubUsername: "yashvardhan",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=yash",
    prsMerged: 18,
    points: 1240,
    badges: ["Icebreaker", "Glacier King", "Rust Wizard"]
  },
  {
    rank: 2,
    name: "Srushti R.",
    githubUsername: "srushtirindhe",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=srushti",
    prsMerged: 15,
    points: 1050,
    badges: ["Aurora Queen", "TypeScript Ninja"]
  },
  {
    rank: 3,
    name: "Abhinav A.",
    githubUsername: "abhinav10905",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=abhinav",
    prsMerged: 14,
    points: 980,
    badges: ["Winter Core", "Go Specialist"]
  },
  {
    rank: 4,
    name: "Oweshrza R.",
    githubUsername: "oweshrza",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=owesh",
    prsMerged: 12,
    points: 860,
    badges: ["UI Maverick", "CSS Guru"]
  },
  {
    rank: 5,
    name: "Sneha Patil",
    githubUsername: "sneha-p",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=sneha",
    prsMerged: 11,
    points: 790,
    badges: ["Documentation Pro"]
  },
  {
    rank: 6,
    name: "Rohit Verma",
    githubUsername: "rohitv",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=rohit",
    prsMerged: 9,
    points: 620,
    badges: ["Fast Responder"]
  }
];

export const faqList: FAQ[] = [
  {
    id: "q1",
    question: "What is Nexus Spring of Code (NSoC) Winter Edition?",
    answer: "NSoC Winter Edition is an open-source development program focused on guiding beginners and experienced developers to make real-world contributions to projects backed by actual organizations, companies, and student groups."
  },
  {
    id: "q2",
    question: "Who can participate in NSoC?",
    answer: "Any student, professional, or beginner who wants to step into open source development is welcome. There is no background constraint, only a passion to learn and code."
  },
  {
    id: "q3",
    question: "Is there any registration or participation fee?",
    answer: "Absolutely not! NSoC is 100% free, run for the community, by the community, supported by generous partners and sponsors."
  },
  {
    id: "q4",
    question: "How are projects selected and who reviews my pull requests?",
    answer: "Projects are selected based on their real-world utility, open-source compliance, and readiness to onboard contributors. Each project is assigned 1-2 dedicated mentors who will guide you, review your code, and merge your work."
  },
  {
    id: "q5",
    question: "What are the rewards and benefits?",
    answer: "Contributors earn points for merged pull requests based on the complexity of the issues. Top performers receive exclusive NSoC swags (hoodies, t-shirts, winter caps, stickers). All active participants with at least one merged PR receive an official Certificate and outstanding developers can receive a personalized Letter of Recommendation."
  },
  {
    id: "q6",
    question: "Can I participate if I only have a mobile phone?",
    answer: "Open-source development generally requires a desktop, laptop, or cloud-based environment (like GitHub Codespaces or Gitpod) to run and test projects. While you can review and write docs on a mobile device, a desktop/laptop is highly recommended for coding contributions."
  }
];
