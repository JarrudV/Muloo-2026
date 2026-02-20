import { services } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesHub() {
  return <div className="flex flex-col">{services.hub.modules.map((module) => renderModule(module))}</div>;
}
