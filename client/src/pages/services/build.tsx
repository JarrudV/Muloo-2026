import { servicesBuildModules } from "@/content/services";
import { renderModule } from "@/modules/registry";
import { registerServiceModules } from "@/modules/services/registerServiceModules";

registerServiceModules();

export function ServicesBuild() {
  return (
    <div className="flex flex-col">{servicesBuildModules.map((module) => renderModule(module))}</div>
  );
}
