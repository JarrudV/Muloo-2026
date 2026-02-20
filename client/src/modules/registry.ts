import {
  createElement,
  type ComponentType,
  type ReactElement,
} from "react";

type RegistryModule = {
  id: string;
  type: string;
};

export type ModuleComponent<TModule extends RegistryModule> = ComponentType<{
  module: TModule;
}>;

const moduleRegistry: Record<string, ModuleComponent<RegistryModule>> = {};

export function registerModule<TModule extends RegistryModule>(
  type: string,
  component: ModuleComponent<TModule>,
) {
  moduleRegistry[type] = component as ModuleComponent<RegistryModule>;
}

export function getModuleComponent(type: string) {
  return moduleRegistry[type];
}

export function renderModule(module: RegistryModule): ReactElement | null {
  const Component = getModuleComponent(module.type);
  if (!Component) {
    return null;
  }

  return createElement(Component, { key: module.id, module });
}
