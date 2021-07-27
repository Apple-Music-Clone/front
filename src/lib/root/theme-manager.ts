import { darkTheme } from "../shared/theme/dark/dark";
import { lightTheme } from "../shared/theme/light/light";

export type Theme = Record<string, string>;

export interface ThemeList {
  dark?: Theme;
  light?: Theme;
  isDark?: boolean;
}

export class ThemeManager {
  public style: HTMLElement = document.createElement("style");

  constructor(public themes: ThemeList = {}) {
    document.head.prepend(this.style);

    this.themes = Object.assign({}, { isDark: false }, this.themes ?? {});
    this.themes.dark = Object.assign({}, darkTheme, this.themes.dark ?? {});
    this.themes.light = Object.assign({}, lightTheme, this.themes.light ?? {});
  }

  public register(): void {
    let css = ":root {";

    for (const param of Object.entries(this.themes)) {
      const theme = param[0];
      const colors: any = param[1];

      for (const [name, color] of Object.entries(colors)) {
        css += `--${theme}-${name}:${color};`;
      }
    }

    css += "}";

    for (const param of Object.entries(this.themes)) {
      const theme = param[0];
      const colors: any = param[1];

      css += `.theme--${theme} {`;

      for (const name of Object.keys(colors)) {
        css += `--theme-${name}:var(--${theme}-${name});`;
      }

      css += "}";
    }

    for (const param of Object.entries(this.themes)) {
      const theme = param[0];
      const colors: any = param[1];

      for (const name of Object.keys(colors)) {
        css += `.theme--${theme} .text--${name}{ color: var(--${theme}-${name}); }`;
        css += `.theme--${theme}.text--${name}{ color: var(--${theme}-${name});} `;
        css += `.theme--${theme} .bg--${name}{ background: var(--${theme}-${name}); }`;
        css += `.theme--${theme}.bg--${name}{ background: var(--${theme}-${name}); }`;
        css += `.theme--${theme} .var--${name}{ --current-color: var(--${theme}-${name}); }`;
        css += `.theme--${theme}.var--${name}{ --current-color: var(--${theme}-${name}); }`;
      }
    }

    this.style.innerText = css;
  }
}
