<template>
  <div class="c-footer">
    <div class="c-footer__infos">
      <div class="c-footer__infos-copyright">
        <p class="c-footer__infos-copyright-text">
          Copyright © 2021
          <a href="https://support.apple.com/en-us/HT204881" target="_blank"
            >Apple Inc.</a
          >
          All rights reserved.
        </p>
      </div>
      <ul class="c-footer__infos-links" v-if="links && links.length > 0">
        <li
          class="c-footer__infos-links-item"
          v-for="(link, index) of links"
          :key="index"
        >
          <a
            class="c-footer__infos-links-item-link"
            :href="link.url"
            target="_blank"
          >
            {{ link.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="c-footer__country">
      <a href="#" target="_blank" class="c-footer__country-text"
        >United States</a
      >
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
      display: flex;
      list-style-type: none;

      &-item {
        &-link {
          color: var(--theme-systemPrimary);
          padding-right: 10px;

          &:hover {
            color: var(--theme-primaryColor);
            text-decoration: underline;
            cursor: pointer;
          }

          &::after {
            height: 100%;
            content: "";
            border-inline-start: 1px solid var(--theme-systemQuaternary);
            margin-left: 10px;
          }

          /*  &:last-child {
            &::after {
              border-inline-start: none;
            }
          } */
        }
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
