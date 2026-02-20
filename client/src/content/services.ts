import type { BaseModule, ModuleCommonFields } from "@/types/modules";

export interface ServicesHubPageModule extends BaseModule, ModuleCommonFields {
  type: "servicesHubPage";
}

export interface ServicesBuildPageModule extends BaseModule, ModuleCommonFields {
  type: "servicesBuildPage";
}

export interface ServicesAiPageModule extends BaseModule, ModuleCommonFields {
  type: "servicesAiPage";
}

export interface ServicesProductPageModule extends BaseModule, ModuleCommonFields {
  type: "servicesProductPage";
}

export interface ServicesConsultingPageModule extends BaseModule, ModuleCommonFields {
  type: "servicesConsultingPage";
}

export type ServicePageModule =
  | ServicesHubPageModule
  | ServicesBuildPageModule
  | ServicesAiPageModule
  | ServicesProductPageModule
  | ServicesConsultingPageModule;

export const servicesHubModules: ServicePageModule[] = [
  {
    id: "services-hub-page",
    type: "servicesHubPage",
  },
];

export const servicesBuildModules: ServicePageModule[] = [
  {
    id: "services-build-page",
    type: "servicesBuildPage",
  },
];

export const servicesAiModules: ServicePageModule[] = [
  {
    id: "services-ai-page",
    type: "servicesAiPage",
  },
];

export const servicesProductModules: ServicePageModule[] = [
  {
    id: "services-product-page",
    type: "servicesProductPage",
  },
];

export const servicesConsultingModules: ServicePageModule[] = [
  {
    id: "services-consulting-page",
    type: "servicesConsultingPage",
  },
];
