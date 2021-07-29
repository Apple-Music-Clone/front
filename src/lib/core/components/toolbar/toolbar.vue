<template>
  <div class="c-toolbar">
    <div class="c-toolbar__button">
      <div class="c-toolbar__button-icon">

      </div>
      <div class="c-toolbar__button-text">Sign In</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/lib/shared/styles/typography.scss";
@import "@/lib/shared/styles/mq.scss";

.c-toolbar {
  display: flex;
  justify-content: flex-end;
  height: 55px;
  padding-right: 20px;
  align-items: center;

  &__button {
    display: flex;
    align-items: center;
    background: var(--theme-primaryColor);
    height: 28px;
    cursor: pointer;
    border-radius: 6px;
    padding: 0 12px;

    &-text {
      color: #FFFFFF;
    }
  }
}

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AmcToolbar extends Vue {

}
</script>
