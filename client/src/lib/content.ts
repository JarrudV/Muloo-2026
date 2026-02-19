// Content Structure for Muloo Website

export const navLinks = [
  { name: "Expertise", href: "/services", 
    subItems: [
      { name: "Platform Engineering", href: "/services/build", desc: "Custom software, AI & Integrations" },
      { name: "HubSpot RevOps", href: "/services/hub", desc: "Enterprise CRM Architecture" },
      { name: "Product Development", href: "/services/product", desc: "SaaS & Internal Tools" },
      { name: "Strategic Consulting", href: "/services/consulting", desc: "CTO & Process Optimization" }
    ]
  },
  { name: "Work", href: "/case-studies", 
    subItems: [
      { name: "Case Studies", href: "/case-studies", desc: "Outcomes delivered" },
      { name: "Insights", href: "/blog", desc: "Technical thinking" }
    ]
  },
  { name: "Company", href: "/about" },
];

export const homeContent = {
  hero: {
    badge: "Full Stack Development & RevOps",
    headline: "Stop buying hours. Start shipping software.",
    subhead: "We are a full-stack development house that bridges the gap between enterprise HubSpot architecture and custom software engineering. We build the systems that drive your revenue.",
    primaryCta: "Discuss your project",
    secondaryCta: "View our work",
    techStack: ["HubSpot", "React", "Node.js", "Python", "AWS", "Azure", "PostgreSQL", "OpenAI"]
  },
  valueProp: {
    title: "Engineering, not just implementation.",
    subtitle: "Most agencies click buttons. We write code.",
    desc: "We solve complex operational problems that off-the-shelf tools can't handle. From rapid prototyping to AI agents and complex integrations, we build the missing pieces of your stack."
  },
  pillars: [
    {
      id: "build",
      title: "Custom Engineering",
      subtitle: "Full Stack & Integrations",
      desc: "We build what HubSpot can't do. Custom client portals, complex API integrations, middleware, and proprietary internal tools.",
      features: ["React & Node.js Apps", "Bi-directional Syncs", "AI Agents", "Data Warehousing"],
      href: "/services/build"
    },
    {
      id: "hub",
      title: "Enterprise HubSpot",
      subtitle: "RevOps Architecture",
      desc: "Technical implementation for scale. We treat your CRM like a software product—version controlled, documented, and built for data integrity.",
      features: ["CRM Architecture", "Programmable Automation", "Data Migration", "Reporting Infrastructure"],
      href: "/services/hub"
    },
    {
      id: "consult",
      title: "Strategic Consulting",
      subtitle: "Fractional Leadership",
      desc: "Senior technical leadership to guide your roadmap. We provide the architectural oversight and process optimization you need to scale.",
      features: ["Outsourced CTO", "Sales Engineering", "Process Mining", "Tech Stack Audit"],
      href: "/services/consulting"
    }
  ],
  stats: [
    { label: "Integrations Built", value: "200+" },
    { label: "Revenue Influenced", value: "$50M+" },
    { label: "Custom Apps Shipped", value: "45+" }
  ],
  partners: {
    headline: "Strategic collaborators",
    body: "We do not offer day to day marketing execution. When design, content, or campaign delivery is needed, we collaborate closely with trusted partners.",
    list: ["Tusk", "Sol Creative"]
  }
};

export const serviceHubContent = {
  h1: "Muloo Hub",
  intro: "HubSpot is powerful, but only if it is implemented with clean data, clear process, and reporting you can trust. Muloo Hub covers implementation, onboarding, optimisation, and ongoing technical support.",
  features: [
    "HubSpot onboarding and implementation",
    "Portal clean up and optimisation",
    "CRM architecture and pipeline design",
    "Custom properties, workflows, and permissions",
    "Dashboards, reporting, and attribution foundations",
    "Sales, marketing, and service enablement",
    "Website builds on HubSpot CMS",
    "Integrations and data migrations into HubSpot"
  ],
  cta: {
    headline: "Need HubSpot to feel calm and predictable again?",
    body: "Let’s map what is working, what is broken, and what needs to change."
  }
};

export const serviceBuildContent = {
  h1: "Muloo Build",
  intro: "Integrations, apps, and full stack development. We connect platforms, automate workflows, and build custom software where off the shelf tools stop short.",
  approach: [
    { step: "01", title: "Discover", desc: "We map your current stack and identify the gaps." },
    { step: "02", title: "Architect", desc: "We design a scalable solution with clear data flows." },
    { step: "03", title: "Ship", desc: "We build, test, and deploy iteratively." },
    { step: "04", title: "Support", desc: "We ensure stability and handle maintenance." }
  ]
};

export const serviceProductContent = {
  h1: "Muloo Product",
  intro: "Commercial software and internal tools built by Muloo. Products that solve real operational problems and plug neatly into modern CRM stacks.",
  products: [
    {
      title: "Inventory Manager",
      desc: "A lightweight inventory management tool that syncs directly with HubSpot Deals and Products.",
      status: "Commercial Product"
    },
    {
      title: "Client Portal Kit",
      desc: "A secure, white-labeled portal framework for HubSpot customers to view tickets and invoices.",
      status: "In Development"
    },
    {
      title: "Data Sync Helper",
      desc: "Middleware to clean and standardize phone numbers and addresses before they hit your CRM.",
      status: "Internal Tool"
    }
  ]
};

export const serviceConsultingContent = {
  h1: "Specialist Consulting",
  intro: "Strategic leadership on demand. We provide outsourced CTO, Sales Engineering, and Process Optimization services to help you scale without the overhead.",
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
    },
    {
      title: "Process Optimization",
      desc: "Operational excellence. We analyze your workflows, identify bottlenecks, and implement streamlined processes.",
      lead: "Paul Manson"
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
      image: "jarrud_profile_picture_1771486552112.png" 
    },
    {
      name: "Morne Visagie",
      role: "Partner & Outsourced CTO",
      bio: "Leads Muloo Build and provides Outsourced CTO services.",
      linkedin: "https://www.linkedin.com/in/mornevisagie/",
      image: "Component_25_–_1_1771486552111.png"
    },
    {
      name: "Paul Manson",
      role: "Business Analyst & Outsourced COO",
      bio: "Trusted partner for Business Analysis and Outsourced COO Services.",
      linkedin: "https://www.linkedin.com/in/paulmanson/",
      image: "Component_77_–_1_1771486552111.png" 
    }
  ]
};
