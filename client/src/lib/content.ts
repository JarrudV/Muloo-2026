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
    primaryCta: "Talk Engineering",
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
      desc: "Where HubSpot stops, we begin. Custom middleware, client portals, authenticated experiences, and API-centric development.",
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
  h1: "Muloo Hub",
  intro: "Enterprise-grade HubSpot architecture. We move beyond basic setup to complex data modeling, programmable automation, and UI enhancements that drive user adoption.",
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
    headline: "Is your CRM technically sound?",
    body: "Let's review your architecture and identify optimization opportunities."
  }
};

export const serviceBuildContent = {
  h1: "Muloo Build",
  intro: "We bridge the gap between SaaS platforms. Custom middleware, secure integrations, and purpose-built applications that orchestrate your business logic.",
  approach: [
    { step: "01", title: "Spec", desc: "Technical requirements gathering and API schema definition." },
    { step: "02", title: "Build", desc: "Iterative development with strict type safety and testing." },
    { step: "03", title: "Deploy", desc: "CI/CD pipelines, monitoring, and error tracking." },
    { step: "04", title: "Scale", desc: "Performance optimization and infrastructure management." }
  ]
};

export const serviceProductContent = {
  h1: "Muloo Product",
  intro: "We don't just build for clients; we build for the market. Our product division develops commercial SaaS solutions and internal tools that demonstrate our engineering capability.",
  products: [
    {
      title: "Inventory Sync",
      desc: "Real-time bidirectional sync between ERP systems and HubSpot Deals/Products.",
      status: "Live"
    },
    {
      title: "Portal Framework",
      desc: "A Next.js starter kit for building authenticated client portals on top of HubSpot CRM data.",
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
  h1: "Muloo AI",
  intro: "The workbench for the AI age. We help companies deploy practical AI agents, use 'vibe coding' for rapid prototyping, and secure their AI infrastructure.",
  services: [
    {
      title: "Codex Dev Agents",
      desc: "Implementation of AI coding assistants to accelerate your internal development velocity.",
      lead: "Engineering Team"
    },
    {
      title: "Rapid Prototyping",
      desc: "'Vibe coding' sessions to go from idea to functional prototype in days, not weeks.",
      lead: "Product Team"
    },
    {
      title: "AI Service Agents",
      desc: "Autonomous agents that triage support tickets and handle routine customer inquiries.",
      lead: "Automation Team"
    },
    {
      title: "AI Security",
      desc: "Auditing LLM prompts and data pipelines for security vulnerabilities and data leakage.",
      lead: "Security Team"
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
    headline: "Embedded Leadership Without Full-Time Overhead.",
    subtext: "We provide senior technical and operational capability inside growing businesses."
  },
  services: [
    {
      id: "cto",
      title: "Outsourced CTO",
      desc: "Strategic technical leadership for product roadmap, architecture decisions, and engineering team culture. We embed into your business as a fractional CTO.",
      accent: "#155DFC",
      stream: "build"
    },
    {
      id: "sales-eng",
      title: "Outsourced Sales Engineering",
      desc: "Technical pre-sales support, solution architecture, and deal enablement. We bridge the gap between your product and your pipeline.",
      accent: "#F47621",
      stream: "hub"
    },
    {
      id: "coo",
      title: "Outsourced COO",
      desc: "Operational strategy, process design, and execution oversight. We bring structure and accountability to your operations.",
      accent: "#59BF96",
      stream: "product"
    },
    {
      id: "ba",
      title: "Business Analysis",
      desc: "Requirements gathering, stakeholder alignment, and technical specification. We translate business needs into engineering deliverables.",
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
