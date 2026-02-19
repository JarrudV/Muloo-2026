// Content Structure for Muloo Website

export const navLinks = [
  { name: "Services", href: "/services", 
    subItems: [
      { name: "Muloo Hub", href: "/services/hub", desc: "Enterprise HubSpot Architecture" },
      { name: "Muloo Build", href: "/services/build", desc: "API-Centric Engineering" },
      { name: "Muloo AI", href: "/services/ai", desc: "AI Agents & Vibe Coding" },
      { name: "Muloo Product", href: "/services/product", desc: "SaaS & Internal Tools" }
    ]
  },
  { name: "Advisory", href: "/advisory" },
  { name: "Resources", href: "/resources", 
    subItems: [
      { name: "Case Studies", href: "/case-studies", desc: "Technical outcomes" },
      { name: "Insights", href: "/blog", desc: "Engineering guides" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    badge: "Technical Partner for HubSpot + AI",
    headline: "Engineering the future of revenue.",
    subhead: "We are a full-stack technical partner. We implement HubSpot, engineer custom software, and deploy AI agents to solve complex operational problems.",
    primaryCta: "Start a conversation",
    secondaryCta: "View Our Work",
    techStack: ["HubSpot", "React", "Node.js", "Python", "OpenAI", "Anthropic", "AWS", "Vercel"]
  },
  valueProp: {
    title: "Code. Config. Context.",
    subtitle: "Beyond implementation",
    desc: "Marketing agencies implement software. We engineer systems. From complex HubSpot architectures to autonomous AI agents, we build the technical foundation your revenue relies on."
  },
  pillars: [
    {
      id: "hub",
      title: "Muloo Hub",
      subtitle: "System Mastery",
      desc: "Deep technical HubSpot implementation. We treat CRM configuration like software engineering—versioned, documented, and scalable.",
      features: ["Enterprise Architecture", "Data Migration", "Programmable Automation", "UI/UX Improvements"],
      href: "/services/hub"
    },
    {
      id: "build",
      title: "Muloo Build",
      subtitle: "Full Stack Engineering",
      desc: "Where platforms disconnect, we connect them. Custom middleware, client portals, authenticated experiences, and API-centric development.",
      features: ["Custom Middleware", "Client Portals", "External Integrations", "Secure Auth Systems"],
      href: "/services/build"
    },
    {
      id: "product",
      title: "Muloo Product",
      subtitle: "SaaS & Tools",
      desc: "We build and maintain proprietary SaaS products and internal tools that solve specific operational gaps in the market.",
      features: ["Internal Tools", "Commercial SaaS", "Product Strategy", "MVP Development"],
      href: "/services/product"
    },
    {
      id: "ai",
      title: "Muloo AI",
      subtitle: "Intelligence Layer",
      desc: "Practical AI implementation. From coding agents that speed up dev to service agents that handle customer queries.",
      features: ["Codex Dev Agents", "AI Service Agents", "Rapid Prototyping", "Security Audits"],
      href: "/services/ai"
    }
  ],
  stats: [
    { label: "API Endpoints Managed", value: "500+" },
    { label: "AI Agents Deployed", value: "12+" },
    { label: "Systems Integrated", value: "50+" }
  ],
  partners: {
    headline: "Ecosystem Partners",
    body: "We focus on engineering. For brand, design, and campaign execution, we partner with the best.",
    list: ["Tusk", "Sol Creative"]
  }
};

export const serviceHubContent = {
  h1: "HubSpot. Built properly.",
  intro: "Most portals are configured quickly and grow messy over time. We design CRM architecture with structure, governance, reporting clarity, and long-term scalability.",
  features: [
    "HubSpot Enterprise Implementation",
    "Complex Data Modeling & Custom Objects",
    "Serverless Functions & Programmable Automation",
    "CRM UI/UX Customization",
    "Advanced Reporting & SQL",
    "Attribution Modeling",
    "Migration Engineering",
    "Portal Audits & Refactoring"
  ],
  cta: {
    headline: "Ready for a structured HubSpot?",
    body: "Let's review your portal architecture and build a roadmap."
  }
};

export const serviceBuildContent = {
  h1: "Muloo Build",
  intro: "Where platforms disconnect, we connect them. Custom middleware, secure integrations, and purpose-built applications that orchestrate your business logic across any stack.",
  approach: [
    { step: "01", title: "Discover", desc: "Technical requirements gathering, API schema definition, and stakeholder alignment." },
    { step: "02", title: "Architect", desc: "System design with typed contracts, data flow diagrams, and infrastructure planning." },
    { step: "03", title: "Ship", desc: "Iterative development with CI/CD, testing, and staging environment validation." },
    { step: "04", title: "Support", desc: "Production monitoring, error tracking, performance optimisation, and knowledge transfer." }
  ]
};

export const serviceProductContent = {
  h1: "From concept to commercial SaaS.",
  intro: "We design, build, and scale software products — internal tools and commercial platforms.",
  products: [
    {
      title: "Inventory Sync",
      desc: "Real-time bidirectional sync between ERP systems and CRM platforms.",
      status: "Live"
    },
    {
      title: "Portal Framework",
      desc: "A starter kit for building authenticated client portals on top of CRM data.",
      status: "Beta"
    },
    {
      title: "Data Sanitizer",
      desc: "Middleware service for normalizing phone numbers and addresses before CRM ingestion.",
      status: "Internal"
    }
  ]
};

export const serviceAiContent = {
  h1: "Applied AI. Not experimentation.",
  intro: "We deploy AI agents and workflow automation where it creates measurable operational lift — not novelty.",
  services: [
    {
      title: "Service Agents",
      desc: "Autonomous agents that handle customer inquiries, triage tickets, and resolve routine requests without human intervention.",
      lead: "Operations"
    },
    {
      title: "Dev Acceleration Agents",
      desc: "AI-powered engineering support — code generation, review automation, and testing acceleration embedded in your dev workflow.",
      lead: "Engineering"
    },
    {
      title: "Workflow AI Automation",
      desc: "Intelligent automation that connects AI reasoning to your existing business processes, replacing manual steps with agent-driven logic.",
      lead: "Process"
    },
    {
      title: "AI QA & Security Review",
      desc: "Auditing LLM prompts, data pipelines, and agent behaviour for vulnerabilities, hallucination risk, and data leakage.",
      lead: "Security"
    }
  ]
};

export const serviceConsultingContent = {
  h1: "Strategic Consulting",
  intro: "Fractional leadership for scaling technical teams. We provide the architectural oversight and process optimization you need to scale.",
  services: [
    {
      title: "Outsourced CTO",
      desc: "Strategic technical leadership to guide your product roadmap, architecture decisions, and engineering team culture.",
      lead: "Morne Visagie"
    },
    {
      title: "Sales Engineering",
      desc: "Bridge the gap between sales and product. Technical demos, solution architecture, and deal support for complex sales cycles.",
      lead: "Jarrud van der Merwe"
    }
  ]
};

export const advisoryContent = {
  hero: {
    headline: "Embedded leadership without permanent overhead.",
    subtext: "We step in where clarity, structure, and execution are required."
  },
  services: [
    {
      id: "cto",
      title: "Outsourced CTO",
      desc: "Technical strategy, architecture oversight, and engineering leadership embedded directly into your business on a fractional basis.",
      accent: "#155DFC",
      stream: "build"
    },
    {
      id: "sales-eng",
      title: "Sales Engineering",
      desc: "Technical pre-sales, solution architecture, and deal enablement. We bridge the gap between product capability and revenue.",
      accent: "#F47621",
      stream: "hub"
    },
    {
      id: "process",
      title: "Process Optimisation",
      desc: "Operational workflow design, tooling selection, and execution frameworks that reduce friction and increase throughput.",
      accent: "#C140FF",
      stream: "ai"
    },
    {
      id: "coo",
      title: "Embedded COO",
      desc: "Operational leadership for growing businesses — accountability structures, team coordination, and strategic execution.",
      accent: "#59BF96",
      stream: "product"
    }
  ],
  leaders: [
    {
      name: "Morne Visagie",
      title: "Partner",
      roles: ["Leads Muloo Build", "Outsourced CTO"],
      bio: "Full-stack engineer and technical strategist. Morne leads architecture decisions across client engagements and provides fractional CTO services to scaling teams.",
      accent: "#155DFC",
      linkedin: "https://www.linkedin.com/in/mornevisagie/",
      image: "morne"
    },
    {
      name: "Jarrud van der Merwe",
      title: "Partner",
      roles: ["Lead HubSpot Architect", "Sales Engineering Lead", "Leads Muloo Hub"],
      bio: "CRM architect and sales engineer. Jarrud designs enterprise HubSpot implementations and provides technical pre-sales support for complex deal cycles.",
      accent: "#F47621",
      linkedin: "https://www.linkedin.com/in/jarrud/",
      image: "jarrud"
    },
    {
      name: "Paul Manson",
      title: "Strategic Partner",
      roles: ["Business Analysis", "Outsourced COO Services"],
      bio: "Operations specialist and business analyst. Paul brings structure to growing businesses through process design, requirement mapping, and operational oversight.",
      accent: "#59BF96",
      linkedin: "https://www.linkedin.com/in/paulmanson/",
      image: "paul"
    }
  ]
};


export const aboutContent = {
  h1: "About Muloo",
  intro: "We are a technical partner for ambitious teams. We bridge the gap between marketing strategy and engineering reality.",
  philosophy: [
    { title: "Approachable", desc: "We speak plain English, not jargon." },
    { title: "Educational", desc: "We teach your team how to fish." },
    { title: "Helpful", desc: "We solve problems, we don't just log hours." },
    { title: "Bias toward shipping", desc: "We believe in getting things done." }
  ],
  team: [
    {
      name: "Jarrud van der Merwe",
      role: "Lead HubSpot Architect & Sales Engineer",
      bio: "CRM Guru and Sales Engineer. Leads Muloo Hub.",
      linkedin: "https://www.linkedin.com/in/jarrud/",
      image: "jarrud" 
    },
    {
      name: "Morne Visagie",
      role: "Partner & Outsourced CTO",
      bio: "Leads Muloo Build and provides Outsourced CTO services.",
      linkedin: "https://www.linkedin.com/in/mornevisagie/",
      image: "morne"
    },
    {
      name: "Paul Manson",
      role: "Business Analyst & Outsourced COO",
      bio: "Trusted partner for Business Analysis and Outsourced COO Services.",
      linkedin: "https://www.linkedin.com/in/paulmanson/",
      image: "paul" 
    }
  ]
};
