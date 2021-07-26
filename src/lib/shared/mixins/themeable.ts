import { Component, Prop, Vue } from "vue-property-decorator";

@Component<Themeable>({
  inject: {
    parentTheme: {
      from: "parentTheme",
      default: null,
    },
  },
  provide() {
    return this.themeProvider;
  },
})
export class Themeable extends Vue {
  @Prop(Boolean) public dark!: boolean;
  @Prop(Boolean) public light!: boolean;

  public parentTheme!: Themeable;
  public themeProvider = { parentTheme: null as any };

  get isDark(): boolean {
    if (this.light) {
      return false;
    }

    if (this.dark) {
      return true;
    }

    if (!this.parentTheme) {
      return this.$amc.theme.themes.isDark ?? false;
    }

    return this.parentTheme.isDark;
  }

  get themeClass(): string {
    return this.isDark ? "theme--dark" : "theme--light";
  }

  public created(): void {
    this.themeProvider.parentTheme = this;
  }
}
