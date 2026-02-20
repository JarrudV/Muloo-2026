import { homeContent } from "@/lib/content";
import type { BaseModule, ModuleCTA, ModuleCommonFields } from "@/types/modules";

export type StreamId = "hub" | "build" | "ai" | "product";

export interface HomeHeroSystemNode {
  icon: "cloud" | "server" | "workflow" | "shield";
  label: string;
  sub: string;
  color: string;
}

export interface HomeHeroModule extends BaseModule, ModuleCommonFields {
  type: "homeHero";
  rotatingPhrases: string[];
  primaryCta: ModuleCTA;
  secondaryCta: ModuleCTA;
  footerNote: string;
  systemNodes: HomeHeroSystemNode[];
}

export interface HomePillarItem {
  id: StreamId;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  href: string;
}

export interface HomeStreamsGridModule extends BaseModule, ModuleCommonFields {
  type: "homeStreamsGrid";
  sectionLabel: string;
  sectionHeadline: string;
  items: HomePillarItem[];
}

export interface HomePainPointsModule extends BaseModule, ModuleCommonFields {
  type: "homePainPoints";
  points: string[];
  dashboardBars: number[];
}

export interface HomeLeadMagnetModule extends BaseModule, ModuleCommonFields {
  type: "homeLeadMagnet";
  triggerLabel: string;
  modalHeadline: string;
  modalBody: string;
  modalInputPlaceholder: string;
  modalSubmitLabel: string;
  successTitle: string;
  successBody: string;
}

export interface HomeProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface HomeProcessModule extends BaseModule, ModuleCommonFields {
  type: "homeProcess";
  sectionLabel: string;
  sectionHeadline: string;
  steps: HomeProcessStep[];
}

export interface HomeResourceCard {
  badge: string;
  title: string;
  desc: string;
}

export interface HomeResourcesPreviewModule extends BaseModule, ModuleCommonFields {
  type: "homeResourcesPreview";
  sectionLabel: string;
  sectionBody: string;
  sectionHeadline: string;
  sectionSubheadline: string;
  cards: HomeResourceCard[];
  exploreCta: ModuleCTA;
}

export interface HomeTrustedEcosystemModule extends BaseModule, ModuleCommonFields {
  type: "homeTrustedEcosystem";
  sectionLabel: string;
  sectionHeadline: string;
  sectionBody: string;
  groups: Record<string, string[]>;
}

export interface HomeTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface HomeTestimonialsModule extends BaseModule, ModuleCommonFields {
  type: "homeTestimonials";
  sectionLabel: string;
  sectionHeadline: string;
  testimonials: HomeTestimonial[];
}

export interface HomeFinalCtaModule extends BaseModule, ModuleCommonFields {
  type: "homeFinalCta";
  cta: ModuleCTA;
}

export type HomePageModule =
  | HomeHeroModule
  | HomeStreamsGridModule
  | HomePainPointsModule
  | HomeLeadMagnetModule
  | HomeProcessModule
  | HomeResourcesPreviewModule
  | HomeTrustedEcosystemModule
  | HomeTestimonialsModule
  | HomeFinalCtaModule;

export const homePageModules: HomePageModule[] = [
  {
    id: "home-hero",
    type: "homeHero",
    headline: homeContent.hero.headline,
    body: homeContent.hero.subhead,
    rotatingPhrases: [
      "Technical Partner for HubSpot",
      "Systems & Integration Specialists",
      "AI Workflow & Agent Builders",
      "Embedded CTO & Sales Engineering",
    ],
    primaryCta: {
      label: homeContent.hero.primaryCta,
      href: "/contact",
    },
    secondaryCta: {
      label: homeContent.hero.secondaryCta,
      href: "/case-studies",
      variant: "outline",
    },
    footerNote: "Cape Town based. Globally delivered.",
    systemNodes: [
      {
        icon: "cloud",
        label: "CRM & Data",
        sub: "HubSpot Â· Salesforce",
        color: "#F47621",
      },
      {
        icon: "server",
        label: "Middleware",
        sub: "APIs Â· Sync Â· Auth",
        color: "#155DFC",
      },
      {
        icon: "workflow",
        label: "AI Agents",
        sub: "Codex Â· Automation",
        color: "#C140FF",
      },
      {
        icon: "shield",
        label: "Products",
        sub: "SaaS Â· Portals",
        color: "#59BF96",
      },
    ],
  },
  {
    id: "home-streams",
    type: "homeStreamsGrid",
    sectionLabel: "What we do",
    sectionHeadline: "Four streams. One technical partner.",
    items: homeContent.pillars.map((pillar) => ({
      ...pillar,
      id: pillar.id as StreamId,
    })),
  },
  {
    id: "home-pain-points",
    type: "homePainPoints",
    headline: "Busy isn't the same as effective.",
    body: "The tools are in place. The team is working. But the numbers don't move.",
    points: [
      "Your systems cost more to maintain than they return.",
      "Your data exists everywhere but nobody trusts the reports.",
      "Your automations break silently â€” and revenue leaks before anyone notices.",
      "Your AI spend is growing but measurable ROI isn't.",
    ],
    dashboardBars: [35, 42, 38, 55, 48, 62, 58, 72, 68, 80, 75, 88],
  },
  {
    id: "home-lead-magnet",
    type: "homeLeadMagnet",
    headline: "Free HubSpot & Systems Health Check",
    body: "Get the 10-point checklist we use to stabilise CRM, integrations, and reporting foundations.",
    triggerLabel: "Download the checklist",
    modalHeadline: "Get the checklist",
    modalBody:
      "Enter your email and we'll send the 10-point health check straight to your inbox.",
    modalInputPlaceholder: "you@company.com",
    modalSubmitLabel: "Send me the checklist",
    successTitle: "Thanks!",
    successBody: "Check your inbox shortly.",
  },
  {
    id: "home-process",
    type: "homeProcess",
    sectionLabel: "How we work",
    sectionHeadline: "Structured. Iterative. Transparent.",
    steps: [
      {
        step: "01",
        title: "Discover",
        desc: "Full audit of systems, data flows, and bottlenecks â€” delivered as a documented findings report within 10 business days.",
      },
      {
        step: "02",
        title: "Architect",
        desc: "Technical blueprint with measurable KPIs, defined milestones, and cost estimates before any code is written.",
      },
      {
        step: "03",
        title: "Ship",
        desc: "Iterative delivery with weekly demos and stakeholder sign-off â€” working software, not slide decks.",
      },
      {
        step: "04",
        title: "Support",
        desc: "SLA-backed monitoring, quarterly reviews, and proactive recommendations as your business evolves.",
      },
    ],
  },
  {
    id: "home-resources",
    type: "homeResourcesPreview",
    sectionLabel: "Knowledge",
    sectionBody:
      "Written by the team that builds these systems â€” not a content department.",
    sectionHeadline: "How modern revenue systems are built.",
    sectionSubheadline:
      "Practical notes on HubSpot, integrations, AI workflows, and system design.",
    cards: [
      {
        badge: "HubSpot Foundations",
        title: "Why portal audits should come before automation",
        desc: "Most teams jump to workflows before fixing the data model. Here's why sequencing matters.",
      },
      {
        badge: "Integration Patterns",
        title: "The hidden cost of point-to-point integrations",
        desc: "When every tool connects directly to every other tool, maintenance costs compound fast.",
      },
      {
        badge: "AI Workflows",
        title: "Where AI agents add value vs. where they don't",
        desc: "Not everything needs an agent. A framework for deciding where automation truly helps.",
      },
    ],
    exploreCta: {
      label: "Explore all insights",
      href: "#",
      variant: "outline",
    },
  },
  {
    id: "home-ecosystem",
    type: "homeTrustedEcosystem",
    sectionLabel: "Trusted Ecosystem",
    sectionHeadline: "Built on platforms that power global businesses.",
    sectionBody: "We architect on proven infrastructure â€” not trends.",
    groups: {
      "Engineering Stack": [
        "Azure",
        "Google Cloud",
        "Microsoft",
        "SQL Server",
        "SAP",
      ],
      "CRM & Sales Tools": ["HubSpot", "Apollo", "LinkedIn", "HubLink"],
      "Data & Infrastructure": ["Snowflake", "Azure Data", "BigQuery"],
    },
  },
  {
    id: "home-testimonials",
    type: "homeTestimonials",
    sectionLabel: "What clients say",
    sectionHeadline: "Trusted by teams who build seriously",
    testimonials: [
      {
        quote:
          "Muloo brought clarity to a HubSpot instance that had become unmanageable. Within weeks, our reporting made sense and the sales team actually trusted the data again.",
        name: "Sarah Mitchell",
        title: "VP of Revenue Operations",
        company: "TechScale Group",
      },
      {
        quote:
          "We needed middleware that connected our ERP to HubSpot without breaking every time something changed. Muloo built it properly â€” and it's been running for over a year without a single issue.",
        name: "James van der Berg",
        title: "Head of Digital",
        company: "Meridian Financial Services",
      },
    ],
  },
  {
    id: "home-final-cta",
    type: "homeFinalCta",
    headline: "Ready to build properly?",
    body: "Let's talk about your systems, your data, and what needs to change.",
    cta: {
      label: "Start a Conversation",
      href: "/contact",
    },
  },
];
