export const personal = {
  name: 'Tanya Sharma',
  headline: 'Data Analyst · Business & Product Analytics',
  subheadline: 'SQL · Python · Power BI · AI Pipelines',
  location: 'Haridwar, Uttarakhand, India',
  email: 'tanyash30.05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tanya-business-analyst/',
  github: 'https://github.com/Tanya-Gitt',
  about: `I don't just analyze data — I build things with it. I'm a final-year BCA student and Data Analyst who spent my internship at Hexora cutting insight retrieval time by 40% and saving 6+ hours of manual work every week through automated dashboards and pipelines.`,
  about2: `I care less about which tool I use and more about whether the output changes how someone makes a decision. Outside of analytics, I'm a 4× National-Level Judo Athlete. Competing taught me one thing above everything else: pressure is information.`,
  tagline: 'Pressure is information. I\'ve been processing it since I was a kid.',
};

export const services = [
  {
    icon: '◈',
    title: 'Data Analytics',
    desc: 'End-to-end pipelines, automated dashboards, and insight-driven reporting that reduces decision latency.',
  },
  {
    icon: '⬡',
    title: 'Product Analytics',
    desc: 'Event tracking, funnel analysis, and retention metrics — connecting user behavior to revenue outcomes.',
  },
  {
    icon: '◉',
    title: 'AI / NLP Systems',
    desc: 'LLM-powered tools, multi-agent simulations, and NLP scoring engines built for production use.',
  },
  {
    icon: '⊕',
    title: 'BI & Visualization',
    desc: 'Power BI, Tableau, and D3.js dashboards that turn raw data into clear, stakeholder-ready stories.',
  },
];

export const projects = [
  {
    id: 'suspect',
    name: 'SUSPECT',
    tagline: 'AI-powered noir interrogation game',
    desc: 'Browser-based detective game where every suspect is a live Gemini LLM — they lie, deflect, contradict, and crack under pressure. Mood system (calm → cracking → caught), detective\'s notebook, procedural Web Audio noir soundtrack, custom Ember design system. 6 cases, 4 difficulty modes.',
    tech: ['Next.js 16', 'TypeScript', 'Gemini AI', 'Zustand', 'Framer Motion', 'Tailwind v4', 'Web Audio API'],
    link: 'https://suspect-omega.vercel.app',
    metric: '6 cases · 4 difficulty modes',
    year: '2026',
  },
  {
    id: 'analytiq',
    name: 'Analytiq',
    tagline: 'Self-hostable Segment + Mixpanel alternative',
    desc: 'Open-source product & e-commerce analytics platform replacing $860+/month SaaS stack. PostgreSQL Row-Level Security, 100 req/s ingest, 258-test suite with zero mocks.',
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'TypeScript', 'Docker'],
    link: 'https://github.com/Tanya-Gitt/analytiq',
    metric: '258 tests · 0 mocks',
    year: '2026',
  },
  {
    id: 'ripple',
    name: 'Ripple',
    tagline: 'Collective Intelligence Prediction Engine',
    desc: '100+ AI agent personas debate and react to news/policy events across 3 simulation rounds. Multi-provider LLM cascade (Cerebras, NVIDIA NIM, Groq) with live knowledge graph extraction.',
    tech: ['Python', 'FastAPI', 'React.js', 'D3.js', 'Firebase', 'WebSocket'],
    link: 'https://ripple-lovat.vercel.app',
    metric: '100+ AI agents',
    year: '2025',
  },
  {
    id: 'shortlyst',
    name: 'Shortlyst',
    tagline: 'Hiring Intelligence Tool',
    desc: 'NLP scoring engine with spaCy lemmatization reducing recruiter screening from hours to seconds. 70/30 weighted scoring mirrors real hiring decisions. Bulk PDF/DOCX/TXT processing.',
    tech: ['Python', 'spaCy', 'FastAPI', 'React.js', 'NLP'],
    link: '#',
    metric: '60% cost-per-hire reduction',
    year: '2025',
  },
  {
    id: 'trustlens',
    name: 'TrustLens',
    tagline: 'Real-Time Website Trust Intelligence',
    desc: '8-factor trust score (0–100) with full deduction breakdown. 4-tier data pipeline: curated breach DB → 859 verified HIBP breaches → API → live web search fallback.',
    tech: ['Python', 'TypeScript', 'React.js', 'REST APIs'],
    link: '#',
    metric: '2s trust score · 859 breaches',
    year: '2025',
  },
  {
    id: 'unified',
    name: 'Unified Analytics',
    tagline: 'Product & Revenue Intelligence Platform',
    desc: 'Multi-tenant SaaS from scratch — product event tracking + revenue analytics in one self-hosted platform. Bank-grade data isolation via PostgreSQL Row-Level Security.',
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'asyncpg', 'Docker'],
    link: '#',
    metric: '164 tests · 0 failures',
    year: '2026',
  },
];

export const experience = [
  {
    role: 'Data Analyst Intern',
    company: 'Hexora',
    period: 'Jun 2025 – Aug 2025',
    location: 'Jaipur, India · On-site',
    bullets: [
      'Built end-to-end data visualization dashboard for Falcon Beyond Imagination, cutting insight retrieval time by 40%',
      'Automated 3+ reporting workflows with Python & SQL — saved 6+ hours of manual work per week',
      'Designed API-driven data pipelines integrating MongoDB and MySQL',
    ],
    skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'MongoDB', 'MySQL'],
  },
  {
    role: 'Data Specialist',
    company: 'Independent',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    bullets: [
      'Built hiring analytics tool reducing recruiter screening from hours to seconds through automated candidate scoring',
      'Directly impacted time-to-hire KPIs and reduced cost-per-hire by 60%',
    ],
    skills: ['Python', 'NLP', 'FastAPI', 'React'],
  },
  {
    role: 'Analysis Specialist',
    company: 'Independent',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    bullets: [
      'Created simulation engine modeling how policy changes ripple through stakeholder groups before they happen',
      'Enabling proactive strategy instead of reactive crisis management for government and enterprise clients',
    ],
    skills: ['Python', 'AI/LLM', 'FastAPI', 'WebSocket'],
  },
];

export const techStack = [
  'Python', 'SQL', 'TypeScript', 'JavaScript',
  'PostgreSQL', 'MongoDB', 'MySQL', 'FastAPI',
  'React.js', 'Next.js', 'Power BI', 'Tableau',
  'Docker', 'Firebase', 'D3.js', 'spaCy',
  'GSAP', 'Three.js', 'REST APIs', 'WebSocket',
];
