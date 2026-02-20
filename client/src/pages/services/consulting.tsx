import { services } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesConsulting() {
  return (
    <div className="flex flex-col">
      {services.consulting.modules.map((module) => renderModule(module))}
    </div>
  );
}
