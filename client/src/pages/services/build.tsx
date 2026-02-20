import { services } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">{services.build.modules.map((module) => renderModule(module))}</div>
  );
}
