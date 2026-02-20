import { servicesBuildModules } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">{servicesBuildModules.map((module) => renderModule(module))}</div>
  );
}
