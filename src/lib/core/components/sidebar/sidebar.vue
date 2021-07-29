<template>
  <div class="c-sidebar">
    <div class="c-sidebar__icon">
      <img
        :src="require(`../../../../assets/${icon}`)"
        alt="Logo Apple Music Clone"
      />
    </div>

    <div class="c-sidebar__search">
      <input type="search" placeholder="Search" />
    </div>

    <div class="c-sidebar__items">
      <div
        class="c-sidebar__items-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="c-sidebar__items-item-icon">
          <img
            :src="require(`@/assets/icons/${item.icon}.svg`)"
            :alt="item.title"
          />
        </div>
        <p class="c-sidebar__items-item-text">{{ item.title }}</p>
      </div>
    </div>

    <div class="c-sidebar__button">
      <div class="c-sidebar__button-content">
        <div class="c-sidebar__button-content-icon">
          <img :src="require('@/assets/icons/music.svg')" alt="Music" />
        </div>
        <p class="c-sidebar__button-content-text">Open in iTunes</p>
        <div class="c-sidebar__button-content-suffix-icon">
          <img :src="require('@/assets/icons/share.svg')" alt="Share" />
        </div>
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
  background: var(--theme-sidebar);
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: var(--theme-sidebarBorderRule);

  @include mq($until: tablet-portrait) {
    display: none;
  }

  &__icon {
    padding: 0 25px;
    > img {
      width: 83px;
      margin: 17px 0 18px 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__search {
    margin-bottom: var(--spacing-2);
    margin-top: 8px;
    padding: 0 25px;

    > input {
      background: var(--theme-pageBG);
      height: 32px;
      border-width: 1px;
      border-style: solid;
      border-color: var(--theme-searchBarBorderColor);
      border-radius: 4px;
      outline: none;
      color: var(--theme-systemPrimaryVibrantText);
      font-size: 12px;
      line-height: 1.25;
      font-weight: 400;
      letter-spacing: 0;
      width: 100%;

      &:focus {
        box-shadow: 0 0 0 4px var(--theme-primaryColorRgb);
      }
    }
  }

  &__items {
    padding: 9px 25px 10px;

    &-item {
      padding: 3px;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      &-icon {
        margin-right: 6px;
        color: var(--theme-primaryColor);
      }

      &-text {
        margin: 0;
        color: var(--theme-systemPrimary);
        font-size: 15px;
        line-height: 1.46667;
        font-weight: 400;
        letter-spacing: 0;
      }
    }
  }

  &__button {
    margin: 0 25px;
    border-top-width: 0.5px;
    border-top-style: solid;
    border-top-color: var(--theme-labelDivider);

    &-content {
      margin-top: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &-icon {
        margin-right: 6px;
      }

      &-suffix-icon {
        width: 9px;
        height: 9px;
        margin-bottom: 6px;
        margin-left: 6px;
      }

      &-text {
        margin: 0;
        color: var(--theme-systemSecondary);
        font-size: 13px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AmcSidebar extends Vue {
  @Prop() public items!: any[];

  public icon!: string;

  public created(): void {
    if (this.$amc.theme.themes.isDark) {
      this.icon = "apple-music-logo-gray.svg";
    } else {
      this.icon = "apple-music-logo-black.svg";
    }
  }
}
</script>
