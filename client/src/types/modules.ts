export interface BaseModule {
  id: string;
  type: string;
  variant?: string;
  noindex?: boolean;
  trackingKey?: string;
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
}

export interface ProblemFramingSectionModule extends BaseModule, ModuleCommonFields {
  type: "problemFraming";
  sectionLabel: string;
}

export interface CapabilitiesGridSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "capabilitiesGrid";
  sectionLabel: string;
  items: IconModuleItem[];
  columnsClassName?: string;
  cardDataTestIdPrefix?: string;
}

export interface DiagramBlockSectionModule extends BaseModule, ModuleCommonFields {
  type: "diagramBlock";
  sectionLabel: string;
  accentColor: string;
  checklist?: string[];
  diagramVariant: string;
  diagramData?: Record<string, unknown>;
}

export interface ProcessStepsSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "processSteps";
  sectionLabel: string;
  items: ProcessModuleItem[];
}

export interface OutcomesSectionModule
  extends BaseModule,
    Omit<ModuleCommonFields, "items"> {
  type: "outcomes";
  sectionLabel: string;
  items: IconModuleItem[];
  columnsClassName?: string;
}

export interface MiniCaseSnippetSectionModule extends BaseModule, ModuleCommonFields {
  type: "miniCaseSnippet";
  sectionLabel: string;
  quote?: string;
  person?: string;
  role?: string;
  accentColor: string;
}

export interface CtaBandSectionModule extends BaseModule, ModuleCommonFields {
  type: "ctaBand";
  cta: ModuleCTA;
  accentColor?: string;
  useInlineStyleAccent?: boolean;
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
