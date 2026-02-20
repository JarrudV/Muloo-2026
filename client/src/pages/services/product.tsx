import { servicesProductModules } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      {servicesProductModules.map((module) => renderModule(module))}
    </div>
  );
}
