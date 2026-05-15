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

export interface Project {
  id: string;
  name: string;
  year: string;
  tagline: string;
  problem: string;
  build: string[];
  result: string;
  metric: string;
  tech: string[];
  link: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 'suspect',
    name: 'SUSPECT',
    year: '2026',
    tagline: 'Every suspect lies. Every answer costs something. Only one killed.',
    problem: 'Every detective game ever made is a lie. The "AI" is a decision tree. The suspect\'s response was written two years ago by a writer in an office. You\'re not interrogating anyone — you\'re clicking through a script. We decided to fix that.',
    build: [
      'Each suspect runs on a live Gemini 2.0 LLM with a private system prompt — their secrets, their lies, their breaking points. The client never sees it.',
      'A mood engine tracks pressure across the conversation: calm → evasive → nervous → cracking → caught. The UI responds — border glow, portrait filter, ambient audio tension — all in real time.',
      'The entire noir soundtrack is generated procedurally via Web Audio API. No audio files. Pure math turning into atmosphere.',
      'Built a custom design system called Ember — film grain, CRT scanlines, phosphor glow, vignette — because the game needed to feel like a 1940s case file, not a React app.',
      'Server-side secret enforcement: the murderer\'s identity and each suspect\'s role are resolved on the server. The client is always in the dark. Just like the player.',
    ],
    result: 'Six murder cases. Four difficulty modes ranging from Greenhorn to Obsession Mode — where even the person who seems to be lying might be telling the truth about something. No two interrogations play out the same.',
    metric: '6 cases · 4 difficulty modes',
    tech: ['Next.js 16', 'TypeScript', 'Gemini AI', 'Zustand', 'Framer Motion', 'Tailwind v4', 'Web Audio API', 'React', 'Node.js', 'Vercel', 'CSS Variables'],
    link: 'https://suspect-omega.vercel.app',
    role: 'Full-stack solo build — LLM prompt engineering for 6 suspect personalities, mood-pressure engine, procedural noir soundtrack via Web Audio API, and the Ember design system from scratch.',
  },
  {
    id: 'ripple',
    name: 'Ripple',
    year: '2025',
    tagline: 'Markets aren\'t rational. Neither are our agents.',
    problem: 'A single AI model reading a news article gives you one opinion. But markets move because thousands of people with different biases, geographies, and risk tolerances all react differently — then react to each other\'s reactions. No single model captures that. We built the crowd.',
    build: [
      '100+ distinct AI agent personas — each with a defined geography, risk tolerance, political lean, and sector bias — run in parallel using async key pools across 13 Groq API keys.',
      'Three simulation rounds: initial reaction, cross-agent debate, and final position after seeing what others believe. Emergent cascade events inject realistic disruptions mid-simulation — panic waves, misinformation — that ripple through the social graph.',
      'Before any agent runs, a knowledge graph extraction pass maps every entity and relationship in the source document. Agents argue about a structured world model, not raw text.',
      'A bias detection layer scores source documents for emotional language and tribal markers before the simulation starts — so agents know what they\'re reading is slanted.',
      'Full simulation of 100 agents completes in ~90 seconds. Results export as PDF via ReportLab.',
    ],
    result: 'A prediction engine that produces emergent, crowd-sourced market sentiment — not one model\'s opinion, but the result of 100 agents arguing with each other until a consensus forms. Or doesn\'t.',
    metric: '100 agents · ~90s simulation',
    tech: ['Python', 'FastAPI', 'React.js', 'D3.js', 'WebSocket', 'Groq', 'Cerebras', 'NetworkX', 'asyncio', 'NumPy', 'Pandas', 'ReportLab', 'Pydantic'],
    link: 'https://ripple-lovat.vercel.app',
    role: 'Architected the entire simulation engine — async agent orchestration across 13 Groq API keys, knowledge graph extraction pass, bias detection layer, cascade event injection, and the D3 real-time visualization.',
  },
  {
    id: 'analytiq',
    name: 'Analytiq',
    year: '2026',
    tagline: 'Your data. Your server. No invoice.',
    problem: 'Segment costs $120/month. Mixpanel costs $28/month. Add PostHog, feature flags, a CDP — you\'re at $860+ before you\'ve written a line of product code. And every one of those services owns your data. We built the alternative that doesn\'t.',
    build: [
      'Multi-tenant isolation enforced at the PostgreSQL layer itself using Row-Level Security — not application-level filters that a bug can bypass. Bank-grade separation with zero performance penalty.',
      'Password policy with live HaveIBeenPwned breach checking on signup. If your password appears in a known breach database, you\'re blocked before you ever log in.',
      'An AI Copilot that accepts natural language questions and generates read-only SQL against your own data. "Which features drove retention last month?" becomes a query, not a meeting.',
      'Anomaly detection using Z-score analysis on hourly metrics — the system tells you when something is wrong before you notice it on a dashboard.',
      'Built-in GDPR tooling: user data export, deletion workflows, and opt-out management. Not an afterthought — baked into the schema from day one.',
      '258-test suite with zero mocks. Every test runs against a real database. If it passes, it works.',
    ],
    result: 'A full product analytics stack — event tracking, e-commerce analytics, feature flags, AI Copilot, GDPR compliance — that runs on a single Docker Compose command on your own infrastructure.',
    metric: '258 tests · 0 mocks · 6 containers',
    tech: ['Python', 'FastAPI', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'asyncpg', 'Docker', 'Docker Compose', 'GoTrue', 'Redis', 'JWT', 'React Query', 'Recharts', 'Pydantic'],
    link: 'https://analytiq-phi.vercel.app/dashboard',
    role: 'Solo full-stack from schema to frontend — designed the PostgreSQL RLS isolation model, built the FastAPI backend and Next.js UI, engineered the AI Copilot, and wrote the 258-test zero-mock test suite.',
  },
  {
    id: 'shortlyst',
    name: 'Shortlyst',
    year: '2025',
    tagline: 'A recruiter\'s first hour shouldn\'t be a pile of PDFs.',
    problem: 'A job post goes live. 400 resumes arrive by morning. A recruiter reads the first 30, skims the next 50, and gives up. The best candidate is somewhere in pile 3. This is not a hiring problem — it\'s a data problem. We solved it with NLP.',
    build: [
      'A scoring engine using spaCy lemmatization — not keyword matching. "Managed" and "managing" are the same thing. "PostgreSQL" and "Postgres" are the same thing. The engine understands that.',
      'Weighted scoring architecture: 70% must-have skills, 30% nice-to-have. Mirrors how actual hiring decisions are made — not every skill matters equally.',
      'Multi-format ingestion: PDF via pdfminer, DOCX via python-docx, TXT direct. Handles 1,000+ resumes at 200–500ms per document.',
      'Word-boundary regex prevents false positives. A resume mentioning "MySQL experience" doesn\'t match "SQL" unless SQL is actually present.',
    ],
    result: 'Recruiters upload a job description, define their must-have and nice-to-have skills, and get a ranked, scored candidate list in seconds. The best person in pile 3 surfaces to the top.',
    metric: '1,000+ resumes · 200–500ms each',
    tech: ['Python', 'spaCy', 'FastAPI', 'React 19', 'TypeScript', 'pdfminer', 'python-docx', 'Framer Motion', 'NumPy', 'regex', 'Pydantic'],
    link: '#',
    role: 'Built the NLP scoring engine from scratch — spaCy lemmatization pipeline, weighted 70/30 must-have ranking, multi-format parser (PDF/DOCX/TXT), and word-boundary regex to eliminate false positives.',
  },
  {
    id: 'trustlens',
    name: 'TrustLens',
    year: '2025',
    tagline: 'Before you enter your card. Before you trust the site.',
    problem: 'Every day, people hand their data to websites they\'ve never heard of. There\'s no fast, honest way to know if a site has been breached before, how badly, or what kind of data leaked. Browser lock icons tell you the connection is encrypted. They say nothing about the company behind it.',
    build: [
      'A capped 0–100 scoring model with per-breach limits — no single incident can dominate the score. Five factors per breach: severity, recency, data sensitivity, scale, encryption failures.',
      'Four-tier data pipeline: curated internal database first, then 859 verified HaveIBeenPwned domains, then live API lookup, then web search fallback. Unknown domains score 50 — genuine uncertainty, not false assurance.',
      'All computation is server-side. The client receives a score and a breakdown — it cannot reconstruct the scoring logic or manipulate inputs.',
      'A verification script that validates every mathematical invariant and API contract in the system before deployment.',
    ],
    result: 'A trust score with full transparency — every deduction explained, every source cited. Not a vibe check. A mathematical audit of a website\'s breach history.',
    metric: '859 verified breaches · 5-factor scoring',
    tech: ['Python', 'Flask', 'JavaScript', 'HaveIBeenPwned API', 'Docker', 'SQLite', 'requests', 'BeautifulSoup', 'Jinja2', 'CSS3'],
    link: '#',
    role: 'Designed the scoring algorithm and data pipeline — five-factor breach weighting, four-tier fallback chain (internal DB → 859 HIBP domains → live API → web search), and server-side invariant verification scripts.',
  },
  {
    id: 'competitive',
    name: 'CompeteIQ',
    year: '2025',
    tagline: 'What your competitors changed this week. Before your next board meeting.',
    problem: 'Product managers track competitors across five browser tabs, a spreadsheet, and two Slack channels. By the time the insight reaches a decision, it\'s outdated. Competitive intelligence deserves a real tool, not a cobbled workflow.',
    build: [
      'A Streamlit dashboard that centralises competitor monitoring, KPI tracking, and feature comparisons in one view — configurable per product.',
      'Automated insight generation that surfaces changes and patterns from competitive data without manual interpretation.',
      'SQLite-backed persistence so tracked metrics accumulate over time — enabling trend analysis, not just point-in-time snapshots.',
      'User-configurable metrics so PMs define what competition looks like for their specific market.',
    ],
    result: 'A centralised competitive intelligence tool that turns fragmented browser tabs into structured, persistent, insight-ready data — built specifically for product managers who need answers before meetings, not after.',
    metric: 'Real-time monitoring · automated insights',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'SQLite', 'BeautifulSoup', 'requests', 'NumPy', 'schedule'],
    link: '#',
    role: 'Built the entire platform solo — Streamlit dashboard, automated insight generation pipeline, SQLite trend accumulation layer, and configurable metrics architecture so PMs define what "competition" means for their market.',
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
