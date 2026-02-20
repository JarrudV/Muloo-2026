import { homePageModules } from "@/content/home";
import { renderModule } from "@/modules/registry";
import { registerHomeModules } from "@/modules/home/registerHomeModules";

registerHomeModules();

export function Home() {
  return <div className="flex flex-col">{homePageModules.map((module) => renderModule(module))}</div>;
}
