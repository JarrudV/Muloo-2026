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
    secondaryCta: "Explore services"
  },
  proofPoints: [
    "HubSpot implementations and optimisation",
    "Integrations and data sync that stays stable",
    "Custom apps, portals, and product builds"
  ],
  services: [
    {
      id: "hub",
      title: "Muloo Hub",
      blurb: "Your HubSpot foundation, cleaned up and built for growth. We implement, migrate, optimise, and enable teams so HubSpot becomes the system your business actually runs on.",
      cta: "Explore Muloo Hub",
      link: "/services/hub"
    },
    {
      id: "build",
      title: "Muloo Build",
      blurb: "Integrations, apps, and full stack development. We connect platforms, automate workflows, and build custom software where off the shelf tools stop short.",
      cta: "Explore Muloo Build",
      link: "/services/build"
    },
    {
      id: "product",
      title: "Muloo Product",
      blurb: "Commercial software and internal tools built by Muloo. Products that solve real operational problems and plug neatly into modern CRM stacks.",
      cta: "Explore Muloo Product",
      link: "/services/product"
    }
  ],
  global: {
    headline: "Based in Cape Town. Built for global teams.",
    body: "We deliver remotely across time zones, with clear documentation, structured delivery, and a strong bias to shipping."
  },
  partners: {
    headline: "Creative partners we trust",
    body: "We do not offer day to day marketing execution. When design, content, or campaign delivery is needed, we collaborate closely with trusted partners.",
    list: ["Tusk", "Sol Creative"]
  }
};

export const serviceHubContent = {
  h1: "Muloo Hub",
  intro: "HubSpot is powerful, but only if it is implemented with clean data, clear process, and reporting you can trust. Muloo Hub covers implementation, onboarding, optimisation, and ongoing technical support.",
  bullets: [
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
