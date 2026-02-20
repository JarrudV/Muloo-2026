import { services } from "@/content/services";
import { renderModule } from "@/modules/registry";

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      {services.product.modules.map((module) => renderModule(module))}
    </div>
  );
}
