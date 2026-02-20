import {
  createElement,
  type ComponentType,
  type ReactElement,
} from "react";
import type { HomePageModule } from "@/content/home";
import type { ServiceSectionModule } from "@/types/modules";
import { HomeFinalCtaModule } from "@/modules/home/HomeFinalCtaModule";
import { HomeHeroModule } from "@/modules/home/HomeHeroModule";
import { HomeLeadMagnetModule } from "@/modules/home/HomeLeadMagnetModule";
import { HomePainPointsModule } from "@/modules/home/HomePainPointsModule";
import { HomeProcessModule } from "@/modules/home/HomeProcessModule";
import { HomeResourcesPreviewModule } from "@/modules/home/HomeResourcesPreviewModule";
import { HomeStreamsGridModule } from "@/modules/home/HomeStreamsGridModule";
import { HomeTestimonialsModule } from "@/modules/home/HomeTestimonialsModule";
import { HomeTrustedEcosystemModule } from "@/modules/home/HomeTrustedEcosystemModule";
import { ServiceCapabilitiesGridModule } from "@/modules/services/sections/ServiceCapabilitiesGridModule";
import { ServiceCtaBandModule } from "@/modules/services/sections/ServiceCtaBandModule";
import { ServiceDiagramBlockModule } from "@/modules/services/sections/ServiceDiagramBlockModule";
import { ServiceHeroModule } from "@/modules/services/sections/ServiceHeroModule";
import { ServiceMiniCaseSnippetModule } from "@/modules/services/sections/ServiceMiniCaseSnippetModule";
import { ServiceOutcomesModule } from "@/modules/services/sections/ServiceOutcomesModule";
import { ServiceProblemFramingModule } from "@/modules/services/sections/ServiceProblemFramingModule";
import { ServiceProcessStepsModule } from "@/modules/services/sections/ServiceProcessStepsModule";

export type RegistryModule = HomePageModule | ServiceSectionModule;

type RegistryModuleComponent<TModule extends RegistryModule> = ComponentType<{
  module: TModule;
}>;

type RegistryMap = {
  [K in RegistryModule["type"]]: RegistryModuleComponent<
    Extract<RegistryModule, { type: K }>
  >;
};

const moduleRegistry: RegistryMap = {
  homeHero: HomeHeroModule,
  homeStreamsGrid: HomeStreamsGridModule,
  homePainPoints: HomePainPointsModule,
  homeLeadMagnet: HomeLeadMagnetModule,
  homeProcess: HomeProcessModule,
  homeResourcesPreview: HomeResourcesPreviewModule,
  homeTrustedEcosystem: HomeTrustedEcosystemModule,
  homeTestimonials: HomeTestimonialsModule,
  homeFinalCta: HomeFinalCtaModule,
  serviceHero: ServiceHeroModule,
  problemFraming: ServiceProblemFramingModule,
  capabilitiesGrid: ServiceCapabilitiesGridModule,
  diagramBlock: ServiceDiagramBlockModule,
  processSteps: ServiceProcessStepsModule,
  outcomes: ServiceOutcomesModule,
  miniCaseSnippet: ServiceMiniCaseSnippetModule,
  ctaBand: ServiceCtaBandModule,
};

export function renderModule(module: RegistryModule): ReactElement {
  const Component = moduleRegistry[module.type] as RegistryModuleComponent<RegistryModule>;
  return createElement(Component, { key: module.id, module });
}
