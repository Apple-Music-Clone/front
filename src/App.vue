<template>
  <div :class="[themeClass, 'c-app']">
    <amc-sidebar :items="menu"></amc-sidebar>
    <router-view class="c-app__router"></router-view>
  </div>
</template>

<style lang="scss">
.c-app {
  display: flex;

  &__router {
    width: 100%;
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
