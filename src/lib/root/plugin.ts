import * as coreComponents from "../core/components/index";
import * as sharedComponents from "../shared/components/index";
import { PluginObject } from "vue/types/umd";
import { createObject } from "./AppleMusicClone.ui";
import { ThemeList, ThemeManager } from "./theme-manager";

export interface PluginOptions {
  themes: ThemeList;
  icons: { prefix: string };
}

export const appleMusicCloneUI: PluginObject<PluginOptions> = {
  install(vue, options): void {
    const config = createObject(vue, {
      theme: new ThemeManager(options?.themes),
      icons: options?.icons ?? { prefix: "amc" },
    });

    vue.prototype.$amc = config;

    for (const [name, component] of Object.entries(coreComponents)) {
      vue.component(name, component as any);
    }

    for (const [name, component] of Object.entries(sharedComponents)) {
      vue.component(name, component as any);
    }
  },
};
