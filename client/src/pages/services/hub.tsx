import { servicesHubModules } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesHub() {
  return <div className="flex flex-col">{servicesHubModules.map((module) => renderModule(module))}</div>;
}
