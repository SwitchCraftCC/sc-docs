<template>
  <span :class="classes">
    <img :src="`/img/supporter-tier-${tier}.${ext}`" :alt="`Supporter Tier ${tier}`" />
  </span>
</template>

<script>
export default {
  props: {
    tier: Number,
    svg: Boolean
  },
  computed: {
    ext() { return this.svg ? "svg" : "png"; },
    classes() {
      return {
        "supporter-tag": true,
        "supporter-tag-png": !this.svg
      };
    }
  }
}
</script>

<style lang="stylus" scoped>
  .supporter-tag
    display inline-block
    position relative
    bottom -3px
    margin 0 2px
    image-rendering pixelated
    width 18px
    height auto

  .supporter-tag-png
    bottom -6px
    image-rendering pixelated
</style>
