import { registerModule } from "@/modules/registry";
import { HomeFinalCtaModule } from "@/modules/home/HomeFinalCtaModule";
import { HomeHeroModule } from "@/modules/home/HomeHeroModule";
import { HomeLeadMagnetModule } from "@/modules/home/HomeLeadMagnetModule";
import { HomePainPointsModule } from "@/modules/home/HomePainPointsModule";
import { HomeProcessModule } from "@/modules/home/HomeProcessModule";
import { HomeResourcesPreviewModule } from "@/modules/home/HomeResourcesPreviewModule";
import { HomeStreamsGridModule } from "@/modules/home/HomeStreamsGridModule";
import { HomeTestimonialsModule } from "@/modules/home/HomeTestimonialsModule";
import { HomeTrustedEcosystemModule } from "@/modules/home/HomeTrustedEcosystemModule";

let isRegistered = false;

export function registerHomeModules() {
  if (isRegistered) {
    return;
  }

  registerModule("homeHero", HomeHeroModule);
  registerModule("homeStreamsGrid", HomeStreamsGridModule);
  registerModule("homePainPoints", HomePainPointsModule);
  registerModule("homeLeadMagnet", HomeLeadMagnetModule);
  registerModule("homeProcess", HomeProcessModule);
  registerModule("homeResourcesPreview", HomeResourcesPreviewModule);
  registerModule("homeTrustedEcosystem", HomeTrustedEcosystemModule);
  registerModule("homeTestimonials", HomeTestimonialsModule);
  registerModule("homeFinalCta", HomeFinalCtaModule);

  isRegistered = true;
}
