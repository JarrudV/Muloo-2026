import { services } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesAi() {
  return <div className="flex flex-col">{services.ai.modules.map((module) => renderModule(module))}</div>;
}
