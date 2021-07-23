<template>
  <div class="theme--light">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AmcAppVue extends Vue {}
</script>
