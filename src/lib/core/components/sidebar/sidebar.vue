<template>
  <div :class="[themeClass, 'c-sidebar']">
    <div class="c-sidebar__icon">
      <img
        :src="require('../../../../assets/apple-music-logo-black.svg')"
        alt="Logo Apple Music Clone"
      />
    </div>

    <div class="c-sidebar__search">
      <input type="search" />
    </div>

    <div class="c-sidebar__items">
      <div
        class="c-sidebar__items-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="c-sidebar__items-item-icon"></div>
        <p class="c-sidebar__items-item-text">{{ item.title }}</p>
      </div>
    </div>

    <div class="c-sidebar__button">
      <div class="c-sidebar__button-content">
        <div class="c-sidebar__button-content-icon"></div>
        <p class="c-sidebar__button-content-text">Open in iTunes</p>
        <div class="c-sidebar__button-content-suffix-icon"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/lib/shared/styles/typography.scss";
@import "@/lib/shared/styles/mq.scss";

.c-sidebar {
  width: 260px;
  height: 100vh;
  background: var(--theme-background);

  @include mq($until: tablet-portrait) {
    display: none;
  }

  &__icon {
    padding: 0 25px;
    > img {
      width: 83px;
      margin: 18px 0;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__search {
    margin-bottom: var(--spacing-2);
    padding: 0 25px;
  }

  &__items {
    padding: 9px 25px 10px;

    &-item {
      padding: 3px;

      &:hover {
        background: blue;
        cursor: pointer;
      }

      &-text {
        margin: 0;
      }
    }
  }

  &__button {
    margin: 0 25px;
    border-top: 1px solid black;
    cursor: pointer;

    &-content {
      padding: 12px 0;

      &-text {
        margin: 0;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Themeable } from "@/lib/shared/mixins";

@Component
export default class AmcSidebar extends Mixins(Themeable) {
  @Prop() public items!: any[];
}
</script>
