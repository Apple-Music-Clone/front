<template>
  <div :class="[themeClass, 'c-app']">
    <amc-sidebar :items="menu" class="c-app__sidebar"></amc-sidebar>
    <div class="c-app__content">
      <amc-toolbar class="c-app__content-toolbar"></amc-toolbar>
      <router-view class="c-app__content-router"></router-view>
      <amc-footer
        :links="links"
        class="c-app__content-footer"
      ></amc-footer>
    </div>
  </div>
</template>

<style lang="scss">
.c-app {
  display: flex;
  background: var(--theme-pageBG);

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;

    &-router {
      height: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Component, Mixins, Vue } from "vue-property-decorator";
import { footerLinks, sidebarMenu } from "@/lib/core/utils";
import { Themeable } from "./lib/shared/mixins";

@Component
export default class AmcAppVue extends Mixins(Themeable) {
  public menu!: any[];
  public links!: any[];

  public created(): void {
    this.menu = sidebarMenu;
    this.links = footerLinks;
    this.$amc.theme.themes.isDark = true;
  }
}
</script>
