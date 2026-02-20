export interface RouteMeta {
  title: string;
  description: string;
  ogImage: string;
  ogType: string;
  canonical: string;
  noindex: boolean;
}

const PROD_SITE_URL = "https://wearemuloo.com";

const defaultMeta: Omit<RouteMeta, "canonical"> = {
  title: "Muloo | Technical Systems & AI Acceleration Partner",
  description:
    "Cape Town-based engineering consultancy specializing in HubSpot architecture, custom engineering, and AI automation.",
  ogImage: "/opengraph.jpg",
  ogType: "website",
  noindex: false,
};

const exactRouteMeta: Record<string, Partial<Omit<RouteMeta, "canonical">>> = {
  "/": {},
  "/services/hub": {
    title: "Muloo Hub | Enterprise HubSpot Architecture",
    description:
      "Enterprise HubSpot architecture and CRM engineering for scalable revenue operations.",
  },
  "/services/build": {
    title: "Muloo Build | API-Centric Engineering",
    description:
      "Custom middleware, integrations, and full-stack engineering across modern revenue systems.",
  },
  "/services/product": {
    title: "Muloo Product | SaaS & Internal Tool Engineering",
    description:
      "SaaS and product engineering from concept to production-ready systems.",
  },
  "/services/consulting": {
    title: "Muloo Consulting | Specialist Technical Strategy",
    description:
      "Strategic technical consulting for architecture, systems optimisation, and delivery leadership.",
  },
  "/services/ai": {
    title: "Muloo AI | Applied AI & Workflow Automation",
    description:
      "Applied AI systems, agent workflows, and guardrailed automation for measurable outcomes.",
  },
  "/advisory": {
    title: "Muloo Advisory | Strategic Technical Leadership",
  },
  "/about": {
    title: "About Muloo | The Applied Engineering Studio",
  },
  "/contact": {
    title: "Contact Muloo | Discuss Your Technical Initiative",
  },
  "/styleguide": {
    title: "Muloo Styleguide | Design System",
    noindex: true,
  },
  "/resources": {
    noindex: true,
  },
  "/blog": {
    noindex: true,
  },
  "/case-studies": {
    noindex: true,
  },
};

const dynamicRouteMeta: Array<{
  match: (pathname: string) => boolean;
  meta: Partial<Omit<RouteMeta, "canonical">>;
}> = [
  {
    match: (pathname) => pathname.startsWith("/blog/"),
    meta: { noindex: true },
  },
  {
    match: (pathname) => pathname.startsWith("/case-studies/"),
    meta: { noindex: true },
  },
];

function normalisePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function getRouteMeta(pathname: string): RouteMeta {
  const path = normalisePath(pathname);

  const dynamicMatch = dynamicRouteMeta.find((entry) => entry.match(path));
  const matchedMeta = dynamicMatch ? dynamicMatch.meta : exactRouteMeta[path] || {};

  return {
    ...defaultMeta,
    ...matchedMeta,
    canonical: `${PROD_SITE_URL}${path === "/" ? "" : path}`,
  };
}
