<template>
  <span class="color-name">
    <span class="color" :style="{ backgroundColor: color }" />
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    color: String
  }
}
</script>

<style lang="stylus" scoped>
  .color-name
    font-size 100%
    white-space nowrap
    display inline-flex
    align-items baseline

    .color
      display inline-block
      width 1em
      height 1em
      margin-right 0.25em
      border-radius 0.25rem

      position relative
      bottom -0.125em
</style>
