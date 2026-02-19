// Content Structure for Muloo Website

export const navLinks = [
  { name: "Services", href: "/services", 
    subItems: [
      { name: "Muloo Hub", href: "/services/hub", desc: "HubSpot implementation & optimization" },
      { name: "Muloo Build", href: "/services/build", desc: "Integrations & custom software" },
      { name: "Muloo Product", href: "/services/product", desc: "Internal tools & commercial apps" }
    ]
  },
  { name: "Resources", href: "/resources", 
    subItems: [
      { name: "Case Studies", href: "/case-studies", desc: "See our work in action" },
      { name: "Insights", href: "/blog", desc: "Technical guides & thoughts" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    headline: "HubSpot and custom dev, built properly.",
    subhead: "Muloo is a Cape Town based technical partner that helps teams implement HubSpot, connect their systems, and ship software that drives revenue. Practical, hands on, and built to scale.",
    primaryCta: "Book a call",
    secondaryCta: "Explore services",
    microLine: "Cape Town based. Globally delivered."
  },
  pillars: [
    {
      id: "hub",
      title: "Muloo Hub",
      desc: "HubSpot focused implementation and optimisation.",
      href: "/services/hub"
    },
    {
      id: "build",
      title: "Muloo Build",
      desc: "Integrations, APIs, full stack dev, portals, custom apps.",
      href: "/services/build"
    },
    {
      id: "product",
      title: "Muloo Product",
      desc: "Commercial software and internal SaaS tools.",
      href: "/services/product"
    }
  ],
  capabilities: [
    "CRM Architecture",
    "HubSpot CMS",
    "API Development",
    "Data Sync",
    "Client Portals",
    "Workflow Automation",
    "Reporting Foundations",
    "Middleware"
  ],
  builtProperly: {
    title: "Built Properly.",
    desc: "We don't just hack things together. We build scalable, maintainable systems that your team can rely on.",
    features: [
      { title: "Documentation First", desc: "Every system we build comes with clear, developer-friendly documentation." },
      { title: "Version Control", desc: "We treat your CRM configuration like code. Changes are tracked and managed." },
      { title: "Security Focused", desc: "Data privacy and security are baked into our architecture from day one." }
    ]
  },
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

export const aboutContent = {
  h1: "About Muloo",
  intro: "We are a technical partner for ambitious teams. We bridge the gap between marketing strategy and engineering reality.",
  philosophy: [
    { title: "Approachable", desc: "We speak plain English, not jargon." },
    { title: "Educational", desc: "We teach your team how to fish." },
    { title: "Helpful", desc: "We solve problems, we don't just log hours." },
    { title: "Bias toward shipping", desc: "We believe in getting things done." }
  ]
};
