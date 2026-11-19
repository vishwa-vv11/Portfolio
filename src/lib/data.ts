export const profile = {
  name: "VISHWA R",
  fullName: "VISHWA R",
  role: "AI Engineer",
  headline: "Building practical AI systems for real-world problems.",
  location: "Coimbatore, Tamil Nadu",
  email: "vishwarathinavel3126@gmail.com",
  github: "https://github.com/vishwa-vv11",
  linkedin: "https://www.linkedin.com/in/vishvv111/",
  summary:
    "AI & Machine Learning undergraduate and AI Engineer focused on machine learning, Generative AI, retrieval-augmented generation and agentic systems. Interested in turning real operational needs into useful, deployable software.",
};

export const projects = [
  {
    number: "01",
    name: "FactoryCopilot",
    category: "Industrial AI · Agentic systems",
    description:
      "An AI-powered manufacturing operations assistant designed around a virtual factory floor. It helps reason across production context such as machine downtime, absenteeism, order status and operational recommendations.",
    highlights: [
      "Multi-agent workflow for specialised operational tasks",
      "RAG-based access to domain knowledge",
      "Local LLM integration for on-premise experimentation",
      "Designed around practical manufacturing workflows",
    ],
    stack: ["Python", "Agentic AI", "RAG", "ChromaDB", "Ollama", "LLMs"],
    href: "https://github.com/vishwa-vv11/FactoryCopilot",
    featured: true,
  },
  {
    number: "02",
    name: "ATLAS-NLP Workbench",
    category: "Natural Language Processing",
    description:
      "A learning and experimentation workbench for understanding core NLP concepts and the processing pipeline behind modern language applications.",
    highlights: [
      "Explores text processing and NLP fundamentals",
      "Builds intuition for tokenisation and language representations",
      "Organises concepts into a practical, developer-oriented project",
    ],
    stack: ["Python", "NLP", "Transformers", "Embeddings"],
    href: "https://github.com/vishwa-vv11/NLP-Atlas",
    featured: true,
  },
  {
    number: "03",
    name: "SwachhVision",
    category: "Computer Vision · Civic technology",
    description:
      "A civic issue reporting concept that uses AI-assisted visual analysis and location context to help identify and prioritise sanitation and waste-related problems.",
    highlights: [
      "Citizen-facing issue reporting workflow",
      "Image-based detection concept for sanitation issues",
      "Location context and severity prioritisation",
      "Before-and-after verification workflow",
    ],
    stack: ["Computer Vision", "AI", "Geolocation", "OpenStreetMap", "JavaScript"],
    href: "https://github.com/vishwa-vv11/SwachhVision",
    featured: true,
  },
];

export const skillGroups = [
  { title: "AI & Machine Learning", items: ["Machine Learning", "Model training & evaluation", "Data preprocessing", "NLP", "Computer Vision", "Transformers"] },
  { title: "Generative AI", items: ["LLMs", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases", "Agentic AI", "LLM APIs"] },
  { title: "Frameworks & Tools", items: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "ChromaDB", "Ollama", "LangChain", "LangGraph"] },
  { title: "Software & Data", items: ["REST APIs", "MySQL", "Git", "GitHub", "Deployment fundamentals"] },
];

export const experience = [
  {
    company: "Genorai Technologies",
    role: "AI Engineer",
    period: "9 months",
    type: "Startup · Applied AI",
    description:
      "Worked on practical AI applications for manufacturing environments, connecting customer and shop-floor requirements with product design, testing and deployment.",
    bullets: [
      "Engaged with customers and on-site teams to understand operational requirements.",
      "Translated real-world manufacturing needs into product workflows and AI-assisted solutions.",
      "Contributed to design, implementation, testing and deployment activities.",
      "Worked with LLMs, RAG, agentic AI concepts and APIs in applied product development.",
    ],
  },
];

export const education = [
  {
    institution: "Sri Shakthi Institute of Engineering and Technology",
    period: "2023 – 2027",
    qualification: "B.Tech in Artificial Intelligence and Machine Learning",
    result: "CGPA: 7.97 / 10.0",
  },
  {
    institution: "KSV Higher Secondary School",
    period: "2021 – 2023",
    qualification: "Higher Secondary Education",
    result: "Score: 94%",
  },
];

export type Credential = {
  name: string;
  issuer?: string;
  kind: "Badge" | "Certificate";
  date?: string;
  detail?: string;
  href: string;
  image?: string;
};

export const credentials: Credential[] = [
  {
    name: "Google Cloud Agentic AI Day",
    issuer: "Google Cloud · Hack2Skill",
    kind: "Certificate",
    detail: "Certificate of participation",
    href: "/certificates/Hack2skill-Certificate.png",
    image: "/certificates/Hack2skill-Certificate.png",
  },
  {
    name: "Bharatiya Antariksh Hackathon 2025",
    issuer: "ISRO · Hack2Skill",
    kind: "Certificate",
    detail: "Certificate of acknowledgement",
    href: "/certificates/ack%20hackathon.png",
    image: "/certificates/ack%20hackathon.png",
  },
  {
    name: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew · Unstop",
    kind: "Certificate",
    date: "19 July 2026",
    detail: "Certificate of participation",
    href: "/certificates/quizoff.png",
    image: "/certificates/quizoff.png",
  },
  {
    name: "Introduction to retrieval-augmented generation concepts",
    issuer: "Microsoft",
    kind: "Badge",
    detail: "Module assessment passed",
    href: "/certificates/Introduction%20to%20RAG%20-%20microsoft.png",
    image: "/certificates/Introduction%20to%20RAG%20-%20microsoft.png",
  },
  {
    name: "Hackathon to Solve India's Garbage Problem",
    issuer: "college.dev",
    kind: "Certificate",
    date: "26 October 2026",
    href: "/certificates/AIHackathon2026_Participation_150_VishwaVV.pdf",
    image: "/certificates/college-dev-garbage-hackathon.png",
  },
  {
    name: "AI Innovation Hackathon 2026",
    issuer: "Bharat Academix",
    kind: "Certificate",
    detail: "Registration & Initial Screening · Build Real-World AI Solutions",
    href: "/certificates/eeef82fd-65b7-4065-adbf-3f2cca72f7c9.pdf",
    image: "/certificates/bharat-academix-ai-innovation.png",
  },
  {
    name: "Artificial Intelligence and Machine Learning Internship",
    issuer: "Elevate Labs",
    kind: "Certificate",
    date: "22 September – 8 November 2025",
    detail: "Completion · Best Performer",
    href: "/certificates/elevate%20labs%20-%20vv.pdf",
    image: "/certificates/elevate-labs-internship.png",
  },
  {
    name: "Generative AI and Artificial Intelligence (AI) for Leaders",
    issuer: "Udemy · MTF Institute of Management, Technology and Finance",
    kind: "Certificate",
    date: "May 29, 2025",
    detail: "2.5-hour course completion",
    href: "/certificates/GenAI.pdf",
    image: "/certificates/udemy-generative-ai.png",
  },
  {
    name: "Unstop Quizverse 2026",
    issuer: "Unstop",
    kind: "Certificate",
    detail: "Certificate of participation",
    href: "/certificates/quizz%20verse.pdf",
    image: "/certificates/unstop-quizverse.png",
  },
  {
    name: "Machine Learning in SageMaker",
    issuer: "Amazon Web Services",
    kind: "Certificate",
    date: "12 June 2025",
    detail: "Course completion",
    href: "/certificates/SageMaker.pdf",
    image: "/certificates/infosys-sagemaker.png",
  },
  {
    name: "Introduction to SQL",
    kind: "Certificate",
    date: "22 August 2025",
    href: "/certificates/sql_certificate.pdf",
    image: "/certificates/simplilearn-sql.png",
  },
];
