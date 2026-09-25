export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  category: string;
  points: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  period: string;
  points: string[];
  tech: string[];
}

export interface Responsibility {
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  tag: string;
}

export const personalInfo = {
  name: "Md Waqar Moid",
  shortName: "Waqar",
  initials: "WM",
  headline: "Final-year BSBE undergraduate at IIT Kanpur.",
  tagline: "Working across AI, data, and biological sciences.",
  email: "waqarmoid23@iitk.ac.in",
  institute: "IIT Kanpur",
  department: "Biological Sciences & BioEngineering",
  degree: "B.Tech in Biological Sciences and BioEngineering",
  year: "Final Year (2023 - Present)",
  cpi: "7.5 / 10",
  schooling: "St. Thomas' Boys' School, Kolkata (ISC 95.0% | ICSE 98.2%)",
  bio: "Undergraduate student at IIT Kanpur exploring machine learning, computational biology, data visualization, and web applications. Passionate about quizzing, quantitative problem solving, and building clean tools.",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/waqar-moid-754a0427b/",
  spotify: "https://open.spotify.com/user/31nvbznzvoy5xcq375tddbozlga4?si=c10cc037eed649f4",
  instagram: "https://www.instagram.com/waqar_moid/",
  letterboxd: "https://boxd.it/fLdzD",
  twitter: "https://x.com/waqarandpeace",
  github: "https://github.com/WaqarMoid",
  email: "mailto:waqarmoid23@iitk.ac.in",
};

export const metrics = [
  { label: "Academic CPI", value: "7.5", detail: "IIT Kanpur (BSBE)" },
  { label: "Quizverse Championship", value: "₹11L+", detail: "National Winner" },
  { label: "Inter-IIT Medals", value: "2x", detail: "Cultural Meet 6.0 & 8.0" },
  { label: "Projects Completed", value: "8+", detail: "ML, Bio & Full-Stack" },
];

export const experiences: Experience[] = [
  {
    company: "CarbonTatva AI",
    role: "Software Development Intern",
    period: "May '26 - June '26",
    points: [
      "Engineered a Vectorless RAG chatbot for Bureau of Energy Efficiency (BEE) guidebooks, replacing embeddings with an LLM-driven hierarchical Table of Contents section tree to eliminate hallucinations.",
      "Built an offline data pipeline with PyMuPDF & Tesseract OCR for text extraction and semantic chunking.",
      "Developed a FastAPI backend powered by Mistral API with verification guardrails, source traceability, and page citations.",
      "Deployed serverless on Vercel using local JSON caching, removing external vector database dependency.",
    ],
    tech: ["Python", "FastAPI", "Mistral API", "PyMuPDF", "OCR", "Vercel"],
  },
  {
    company: "Unstop",
    role: "Content Marketing Intern",
    period: "June '25 - July '25",
    points: [
      "Authored 1000+ multiple-choice questions across business, technology, and trivia, improving question diversity.",
      "Researched newsletters, journals, and articles to curate trivia and visual assets.",
      "Contributed to database scaling and platform engagement optimization.",
    ],
    tech: ["Research", "Content Strategy", "Trivia & Analytics"],
  },
];

export const projects: Project[] = [
  {
    id: "cricengine",
    title: "CricEngine",
    subtitle: "Local Match Scoring & Live Spectator Platform",
    timeline: "July '26 - August '26",
    category: "Web Application",
    points: [
      "Built a ball-by-ball cricket scoring web platform with a Finite State Machine handling overs, wickets, and extras.",
      "Implemented client-side state persistence to guarantee zero data loss during offline network drops.",
      "Designed read/write segregation with PIN-based scorer authentication and shareable read-only URLs for spectators.",
      "Crafted a responsive UI featuring SVG worm charts and instant scorecard exports.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "FSM", "State Persistence"],
    githubUrl: "https://github.com/WaqarMoid",
    badge: "Featured",
  },
  {
    id: "stock-analytics",
    title: "Interactive Stock Performance Visualisation",
    subtitle: "CS661 Course Project | Prof. Soumya Dutta",
    timeline: "May '25 - July '25",
    category: "Data Visualization & Finance",
    points: [
      "Processed OHLCV data for 1,700+ NASDAQ stocks; engineered a Greed-Fear Index using RSI, Bollinger Bands, and ATR.",
      "Modeled sector overlays against macroeconomic factors including CPI, GDP, and Fed interest rates.",
      "Deployed a multi-page Streamlit dashboard featuring interactive US choropleth heatmaps and risk analytics in Plotly.",
    ],
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "Technical Indicators"],
    githubUrl: "https://github.com/WaqarMoid",
    badge: "CS661",
  },
  {
    id: "derivatives-pricing",
    title: "Stochastic Modelling of Financial Derivatives",
    subtitle: "Stamatics, IIT Kanpur",
    timeline: "May '25 - July '25",
    category: "Quantitative Finance",
    points: [
      "Built the Black-Scholes-Merton engine in Python and implemented Monte Carlo Brownian simulation for European and Asian options.",
      "Calibrated the Heston stochastic-volatility model against real-world NSE option-chain implied volatilities.",
      "Achieved stable numerical convergence and pricing precision across path-dependent and barrier option contracts.",
    ],
    tech: ["Python", "NumPy", "Monte Carlo", "Heston Model", "Stochastic Calculus"],
    githubUrl: "https://github.com/WaqarMoid",
  },
  {
    id: "plant-stress",
    title: "Plant Stress Resistance Classification",
    subtitle: "Research Project | Prof. Rajesh M. Hegde",
    timeline: "May '25 - Present",
    category: "Computational Biology & ML",
    points: [
      "Classified plant proteins into 6 abiotic stress categories using sequence data and dN/dS evolutionary selection ratios.",
      "Applied small-world network topology to compute graph centrality, clustering, and evolutionary features.",
      "Trained an SVM model achieving 61% accuracy, performing on par with the benchmark ASRPro model.",
    ],
    tech: ["BioPython", "Scikit-Learn", "NetworkX", "SVM", "Protein Bioinformatics"],
    githubUrl: "https://github.com/WaqarMoid",
    badge: "Research",
  },
  {
    id: "biobytes",
    title: "BioBytes: Clinical & Drug Discovery Informatics",
    subtitle: "BioSoc, IIT Kanpur",
    timeline: "May '24 - July '24",
    category: "Bioinformatics & ML",
    points: [
      "Queried the ChEMBL database and screened bioactive chemical compounds satisfying Lipinski's Rule of Five.",
      "Executed feature engineering, PCA, and hyperparameter tuning across Random Forest, Logistic Regression, and SVM.",
      "Achieved 78% accuracy and 75% F1-score on hospital readmissions, and identified antiviral candidates against SARS-CoV-2.",
    ],
    tech: ["Python", "ChEMBL", "Scikit-Learn", "PCA", "Drug Discovery"],
    githubUrl: "https://github.com/WaqarMoid",
  },
  {
    id: "spotify-repositioning",
    title: "Market Driven Brand Repositioning",
    subtitle: "MBA631 Course Project | Prof. Amit Shukla",
    timeline: "June '25",
    category: "Strategy & Marketing",
    points: [
      "Conducted a comprehensive 4P market analysis of Spotify to formulate an actionable brand repositioning strategy.",
      "Evaluated competitive positioning in global music streaming; identified key opportunities in social networking.",
      "Redefined product, price, place, and promotion to pivot the platform into a social discovery ecosystem; produced a TV ad storyboard.",
    ],
    tech: ["Market Analysis", "Brand Strategy", "4P Framework", "Competitive Intelligence"],
  },
  {
    id: "tweet-decoder",
    title: "Tweet Decoder: Election Sentiment Analysis",
    subtitle: "Public Policy & Opinion Cell, IIT Kanpur",
    timeline: "June '24 - July '24",
    category: "NLP & Public Policy",
    points: [
      "Ingested 100k+ tweets via Twitter API; ran NLTK/spaCy lemmatization, TF-IDF vectorization, and TextBlob/VADER polarity scoring.",
      "Implemented Latent Dirichlet Allocation (LDA) via Gibbs sampling to extract latent thematic clusters across political discussions.",
      "Quantified macro shifts in voter sentiment during the 2019 Lok Sabha elections.",
    ],
    tech: ["Python", "NLTK", "spaCy", "LDA", "TF-IDF", "VADER"],
    githubUrl: "https://github.com/WaqarMoid",
  },
  {
    id: "aca-web-apps",
    title: "Full-Stack Web Applications (ACA253)",
    subtitle: "Association for Computing Activities, IIT Kanpur",
    timeline: "May '25 - July '25",
    category: "Full-Stack Development",
    points: [
      "Designed responsive user interfaces using semantic HTML5, modular CSS3/Bootstrap, and modern client-side JavaScript.",
      "Built an end-to-end MERN stack (MongoDB, Express, React, Node.js) platform featuring JWT authentication.",
      "Deployed an e-commerce platform and an interactive online portfolio on cloud infrastructure.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
    githubUrl: "https://github.com/WaqarMoid",
  },
];

export const skillsData = {
  languages: ["Python", "C", "C++", "Java", "SQL"],
  mlAndLibraries: [
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "NumPy",
    "Pandas",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
    "TextBlob",
    "BioPython",
    "Talib",
    "VTK",
  ],
  toolsAndSystems: [
    "PostgreSQL",
    "Langchain",
    "Docker",
    "ChromaDB",
    "GitHub",
    "Vercel",
    "FastAPI",
    "PowerBI",
    "Tableau",
    "LaTeX",
    "Paraview",
    "Google Colab",
  ],
  coursework: [
    "Big Data Visual Analytics",
    "Bioinformatics & Computational Biology",
    "Applied Probability & Statistics",
    "Linear Algebra & Differential Equations",
    "Global Value Chains",
    "Development Economics",
    "Marketing Management",
    "Neurobiology",
    "Design for Biosecurity",
    "Political Economy of Climate Change",
  ],
};

export const responsibilities: Responsibility[] = [
  {
    role: "Organiser, Inter-IIT Cultural Meet 8.0",
    organization: "IIT Kanpur",
    period: "Aug '25 - Dec '25",
    points: [
      "Led a 20+ member team to organise the Quiz Cup at Inter-IIT Cult Meet 8.0, catering to 4,000+ participants across 23 IITs.",
      "Orchestrated 7 flagship quizzes featuring 100+ competing teams and 400+ quizzers.",
      "Managed an allocated budget of ₹3 Lakhs+ and hosted 5 renowned Quizmasters.",
    ],
  },
  {
    role: "Events Secretary, Media & Cultural Council",
    organization: "IIT Kanpur",
    period: "June '24 - April '25",
    points: [
      "Secured brand sponsorships and onboarded vendor stalls for flagship events like Treasure Hunts and Cultural Nexus.",
      "Part of the core organizing teams for Alfaaz (Literary Fest) and Cultural Extravaganza.",
    ],
  },
  {
    role: "Secretary, Quiz Club",
    organization: "IIT Kanpur",
    period: "April '24 - March '25",
    points: [
      "Represented IIT Kanpur at premier inter-collegiate competitions including Inter-IIT and Nihilanth (Inter-IIT-IIM Quiz Fest).",
      "Organized regular open quizzes and campus tournaments.",
    ],
  },
  {
    role: "Academic Mentor",
    organization: "Institute Counselling Service, IIT Kanpur",
    period: "July '24 - March '25",
    points: [
      "Conducted one-to-one English Communication classes for first-year undergraduate students schooled in vernacular languages.",
    ],
  },
  {
    role: "Secretary, BioSoc",
    organization: "IIT Kanpur",
    period: "July '24 - March '25",
    points: [
      "Built a comprehensive database of over 100 Biotech and Pharmaceutical companies, contacting HR teams for campus placements.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "National Champion — IconIQ Quizverse",
    detail: "Secured ₹11 Lakhs+ prize money across competitive stages hosted by the Shiv Nadar Foundation, outperforming 1,000+ participants from 430+ colleges.",
    tag: "National Winner",
  },
  {
    title: "Bronze Medals — Inter-IIT Cultural Meet 6.0 & 8.0",
    detail: "Won Bronze Medal in General Quiz (Cult Meet 6.0) and Sports Quiz (Cult Meet 8.0) competing against teams from across 23 IITs.",
    tag: "Inter-IIT",
  },
  {
    title: "Bithoor Mahotsav Quiz & India Quiz",
    detail: "Secured 3rd place in Bithoor Mahotsav Quiz (UP Ministry of Culture, ₹15k prize) and 2nd in India Quiz (UP Tourism).",
    tag: "State Level",
  },
  {
    title: "1st Place — Kolkata International Quiz Festival",
    detail: "Won 1st place at the Kolkata International Quiz Festival School Quiz and Alipore Zoo Festival Quiz beating 300+ participants.",
    tag: "1st Place",
  },
  {
    title: "1st Position — Fresher's Case Study Competition",
    detail: "Secured 1st position in the case study competition organized by the IITK Consulting Group.",
    tag: "Consulting",
  },
];
