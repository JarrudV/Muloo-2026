import { registerModule } from "@/modules/registry";
import { ServicesAiPageModule } from "@/modules/services/ServicesAiPageModule";
import { ServicesBuildPageModule } from "@/modules/services/ServicesBuildPageModule";
import { ServicesConsultingPageModule } from "@/modules/services/ServicesConsultingPageModule";
import { ServicesHubPageModule } from "@/modules/services/ServicesHubPageModule";
import { ServicesProductPageModule } from "@/modules/services/ServicesProductPageModule";

let isRegistered = false;

export function registerServiceModules() {
  if (isRegistered) {
    return;
  }

  registerModule("servicesHubPage", ServicesHubPageModule);
  registerModule("servicesBuildPage", ServicesBuildPageModule);
  registerModule("servicesAiPage", ServicesAiPageModule);
  registerModule("servicesProductPage", ServicesProductPageModule);
  registerModule("servicesConsultingPage", ServicesConsultingPageModule);

  isRegistered = true;
}
