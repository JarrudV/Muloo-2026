export interface BaseModule {
  id: string;
  type: string;
  variant?: string;
  noindex?: boolean;
  trackingKey?: string;
  sectionClassName?: string;
  containerClassName?: string;
}

export interface ModuleCTA {
  label: string;
  href: string;
  variant?: string;
}

export interface ModuleMedia {
  src: string;
  alt?: string;
  kind?: "image" | "video" | "icon";
}

export interface ModuleItem {
  id?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  href?: string;
  badge?: string;
  ctaLabel?: string;
  features?: string[];
}

export interface ModuleCommonFields {
  headline?: string;
  subheadline?: string;
  body?: string;
  items?: ModuleItem[];
  media?: ModuleMedia | ModuleMedia[];
  cta?: ModuleCTA | ModuleCTA[];
}

export type ContentModule = BaseModule & ModuleCommonFields;

export type ServiceSectionType =
  | "serviceHero"
  | "problemFraming"
  | "capabilitiesGrid"
  | "diagramBlock"
  | "processSteps"
  | "outcomes"
  | "miniCaseSnippet"
  | "ctaBand";

export interface IconModuleItem extends ModuleItem {
  icon?: string;
  metric?: string;
  value?: string;
}

export interface ProcessModuleItem extends ModuleItem {
  step?: string;
  num?: string;
}

export interface ServiceHeroSectionModule extends BaseModule, ModuleCommonFields {
  type: "serviceHero";
  badgeLabel?: string;
  accentColor: string;
  note?: string;
  primaryCta?: ModuleCTA;
  secondaryCta?: ModuleCTA;
  badgeClassName?: string;
  headlineClassName?: string;
  bodyClassName?: string;
  noteClassName?: string;
  primaryCtaClassName?: string;
  secondaryCtaClassName?: string;
}

export interface ProblemFramingSectionModule extends BaseModule, ModuleCommonFields {
  type: "problemFraming";
  sectionLabel: string;
  accentColor?: string;
  labelClassName?: string;
  headlineClassName?: string;
  bodyClassName?: string;
}

export interface CapabilitiesGridSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "capabilitiesGrid";
  sectionLabel: string;
  accentColor: string;
  items: IconModuleItem[];
  hideIcons?: boolean;
  columnsClassName?: string;
  cardDataTestIdPrefix?: string;
  labelClassName?: string;
  headlineClassName?: string;
  cardClassName?: string;
  itemTitleClassName?: string;
  itemSubtitleClassName?: string;
  itemBodyClassName?: string;
  itemCtaClassName?: string;
  iconWrapClassName?: string;
  tagClassName?: string;
  cardBorderTopColor?: string;
  showItemUnderline?: boolean;
  underlineColor?: string;
}

export type DiagramVariant =
  | "hubCrmStructure"
  | "buildArchitectureFlow"
  | "aiWorkflowLoop"
  | "productDashboard"
  | "codexSnippet";

export interface DiagramNode {
  label: string;
  icon: string;
}

export interface HubCrmDiagramData {
  headerLabel: string;
  pipelineLabel: string;
  pipelineStages: string[];
  reportingLabels: {
    conversion: string;
    velocity: string;
    winRate: string;
  };
  reportingValues: {
    conversion: string;
    velocity: string;
    winRate: string;
  };
  permission: {
    title: string;
    sub: string;
  };
  automation: {
    title: string;
    sub: string;
  };
  statusLeft: string;
  statusRight: string;
}

export interface BuildArchitectureFlowDiagramData {
  headerLabel: string;
  sourceLabel: string;
  sourceSystems: DiagramNode[];
  apiGatewayTitle: string;
  apiGatewaySub: string;
  middlewareTitle: string;
  middlewareSub: string;
  queueTitle: string;
  queueSub: string;
  targetLabel: string;
  targetSystems: DiagramNode[];
  statusLeft: string;
  statusMetrics: string[];
}

export interface AiWorkflowLoopDiagramData {
  headerLabel: string;
  triggerTitle: string;
  triggerSub: string;
  agentTitle: string;
  agentSub: string;
  actionTitle: string;
  actionSub: string;
  reportingTitle: string;
  reportingSub: string;
  statusLeft: string;
  statusRight: string;
}

export interface ProductDashboardDiagramData {
  headerLabel: string;
  metrics: Array<{
    label: string;
    value: string;
    trend?: string;
  }>;
  usageLabel: string;
  usageBars: number[];
  tenantsTitle: string;
  tenantSub: string;
  subscriptionsTitle: string;
  subscriptionSub: string;
  statusLeft: string;
  statusRight: string;
}

export interface CodexSnippetDiagramData {
  title: string;
  fileLabel: string;
  lines: string[];
}

export type DiagramDataByVariant = {
  hubCrmStructure: HubCrmDiagramData;
  buildArchitectureFlow: BuildArchitectureFlowDiagramData;
  aiWorkflowLoop: AiWorkflowLoopDiagramData;
  productDashboard: ProductDashboardDiagramData;
  codexSnippet: CodexSnippetDiagramData;
};

export type DiagramData = DiagramDataByVariant[DiagramVariant];

interface DiagramBlockSectionBase extends BaseModule, ModuleCommonFields {
  type: "diagramBlock";
  sectionLabel: string;
  accentColor: string;
  checklist?: string[];
  labelClassName?: string;
  headlineClassName?: string;
  bodyClassName?: string;
}

export type DiagramBlockSectionModule = {
  [K in DiagramVariant]: DiagramBlockSectionBase & {
    diagramVariant: K;
    diagramData: DiagramDataByVariant[K];
  };
}[DiagramVariant];

export interface ProcessStepsSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "processSteps";
  sectionLabel: string;
  accentColor?: string;
  items: ProcessModuleItem[];
  labelClassName?: string;
  headlineClassName?: string;
  cardClassName?: string;
  itemTitleClassName?: string;
  itemBodyClassName?: string;
  columnsClassName?: string;
}

export interface OutcomesSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "outcomes";
  sectionLabel: string;
  accentColor: string;
  items: IconModuleItem[];
  columnsClassName?: string;
  labelClassName?: string;
  headlineClassName?: string;
  cardClassName?: string;
  itemTitleClassName?: string;
  itemBodyClassName?: string;
  iconWrapClassName?: string;
}

export interface MiniCaseSnippetSectionModule extends BaseModule, ModuleCommonFields {
  type: "miniCaseSnippet";
  sectionLabel: string;
  quote?: string;
  person?: string;
  role?: string;
  accentColor: string;
  blockClassName?: string;
  quoteClassName?: string;
}

export interface CtaBandSectionModule extends BaseModule, ModuleCommonFields {
  type: "ctaBand";
  cta: ModuleCTA;
  accentColor?: string;
  useInlineStyleAccent?: boolean;
  headlineClassName?: string;
  bodyClassName?: string;
  ctaClassName?: string;
}

export type ServiceSectionModule =
  | ServiceHeroSectionModule
  | ProblemFramingSectionModule
  | CapabilitiesGridSectionModule
  | DiagramBlockSectionModule
  | ProcessStepsSectionModule
  | OutcomesSectionModule
  | MiniCaseSnippetSectionModule
  | CtaBandSectionModule;
