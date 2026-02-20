import { servicesAiModules } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesAi() {
  return <div className="flex flex-col">{servicesAiModules.map((module) => renderModule(module))}</div>;
}
