import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { ThemeManager } from "./theme-manager";

export interface ObjectOptions {
  theme: ThemeManager,
  icons: { prefix: string },
}

export function createObject(vue: typeof Vue, obj: ObjectOptions): ObjectOptions {
  @Component
  class Config extends Vue implements ObjectOptions {
    public theme = obj.theme;
    public icons = obj.icons;

    @Watch('theme.themes.light', { deep: true })
    @Watch('theme.themes.dark', { deep: true, immediate: true })
    public onThemeChange(): void {
      this.theme.register();
    }
  }

  return new Config();
}
