import { servicesConsultingModules } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesConsulting() {
  return (
    <div className="flex flex-col">
      {servicesConsultingModules.map((module) => renderModule(module))}
    </div>
  );
}
