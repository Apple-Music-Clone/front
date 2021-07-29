<template>
  <div class="c-footer">
    <div class="c-footer__infos">
      <div class="c-footer__infos-copyright">
        <p class="c-footer__infos-copyright-text">
          Copyright © 2021
          <a href="https://support.apple.com/en-us/HT204881">Apple Inc.</a> All
          rights reserved.
        </p>
      </div>
      <div class="c-footer__infos-links" v-if="links && links.length > 0">
        <a
          class="c-footer__infos-links-item"
          v-for="(link, index) of links"
          :key="index"
          :href="link.url"
        >
          {{ link.name }}</a
        >
      </div>
    </div>
    <div class="c-footer__country">
      <a href="#" class="c-footer__country-text">United States</a>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/lib/shared/styles/typography.scss";
@import "@/lib/shared/styles/mq.scss";

.c-footer {
  display: flex;
  justify-content: space-between;
  padding: 19px 40px 34px;
  background: var(--theme-footerBG);
  font-size: 11px;
  line-height: 1.27273;
  font-weight: 400;

  &__infos {
    &-copyright {
      &-text {
        color: var(--theme-systemSecondary);

        > a {
          color: var(--theme-systemPrimary);

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }

    &-links {
      &-item {
        color: var(--theme-systemPrimary);
        padding-right: 10px;

        &:hover {
          color: var(--theme-primaryColor);
          text-decoration: underline;
          cursor: pointer;
        }

        /* &::after {
          height: 100%;
          content: "";
          border-right-width: 1px;
          border-right-style: solid;
          border-right-color: var(--theme-systemQuartenary);
        } */
      }
    }
  }

  &__country {
    &-text {
      color: var(--theme-systemPrimary);

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AmcFooter extends Vue {
  @Prop() public links!: any[];
}
</script>
