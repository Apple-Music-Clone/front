<template>
  <div class="c-new-content-card">
    <div class="c-new-content-card__info">
      <p class="c-new-content-card__info-label">UPDATED PLAYLIST</p>
      <p class="c-new-content-card__info-title">Today's Country</p>
      <p class="c-new-content-card__info-category">Apple Music Country</p>
    </div>

    <div class="c-new-content-card__image">
      <picture>
        <img
          src="https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/25/b4/33/25b433c5-1d99-4587-b029-e2385061fb00/source/600x344sr.webp"
          alt="Today's Country"
        />
      </picture>

      <div class="c-new-content-card__image-label">
        <p class="c-new-content-card__image-label-text">
          Parker McCollum just wants “To Be Loved by You.
        </p>
      </div>

      <div class="c-new-content-card__play">
        <div class="c-new-content-card__play-icon"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.c-new-content-card {
  &__info {
    margin-bottom: 6px;

    > p {
      margin: 0;
    }

    &-label,
    &-category {
      color: var(--theme-systemSecondary);
    }

    &-label {
      font-size: 11px;
    }

    &-title,
    &-category {
      font-size: 17px;
    }

    &-title {
      color: var(--theme-systemPrimary);
    }
  }

  &__image {
    width: 551px;
    height: 316px;
    overflow: hidden;
    border-radius: 6px;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    > picture > img {
      width: 100%;
    }

    &-label {
      position: absolute;
      bottom: 18px;
      left: 18px;

      &-text {
        margin: 0;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AmcNewContentCard extends Vue {}
</script>
