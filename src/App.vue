<template>
  <div :class="[themeClass, 'c-app']">
    <amc-sidebar :items="menu"></amc-sidebar>
    <div class="c-app__content">
    <amc-toolbar class="c-app__content-toolbar"></amc-toolbar>
    <router-view class="c-app__content-router"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.c-app {
  display: flex;
  background: var(--theme-pageBG);

  &__content {
    flex: 1;
  }

}
</style>

<script lang="ts">
import { Component, Mixins, Vue } from "vue-property-decorator";
import { sidebarMenu } from "@/lib/core/utils";
import { Themeable } from "./lib/shared/mixins";

@Component
export default class AmcAppVue extends Mixins(Themeable) {
  public menu!: any[];

  public created(): void {
    this.menu = sidebarMenu;
    this.$amc.theme.themes.isDark = true;
  }
}
</script>
