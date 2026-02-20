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
