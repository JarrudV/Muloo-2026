import { servicesHubModules } from "@/content/services";
import { renderModule } from "@/modules/registry";
import { registerServiceModules } from "@/modules/services/registerServiceModules";

registerServiceModules();

export function ServicesHub() {
  return <div className="flex flex-col">{servicesHubModules.map((module) => renderModule(module))}</div>;
}
