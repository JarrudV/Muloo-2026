import { servicesConsultingModules } from "@/content/services";
import { renderModule } from "@/modules/registry";
import { registerServiceModules } from "@/modules/services/registerServiceModules";

registerServiceModules();

export function ServicesConsulting() {
  return (
    <div className="flex flex-col">
      {servicesConsultingModules.map((module) => renderModule(module))}
    </div>
  );
}
