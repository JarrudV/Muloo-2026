import { homePageModules } from "@/content/home";
import { renderModule } from "@/modules/registry";

export function Home() {
  return <div className="flex flex-col">{homePageModules.map((module) => renderModule(module))}</div>;
}
