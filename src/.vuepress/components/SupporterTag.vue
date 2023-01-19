<template>
  <span class="supporter-tag">
    <img :src="`/img/supporter-tier-${tier}.png`" :alt="`Supporter Tier ${tier}`" />
  </span>
</template>

<script>
export default {
  props: {
    tier: Number
  }
}
</script>

<style lang="stylus" scoped>
  .supporter-tag
    position relative
    bottom -6px
    margin 0 2px
    image-rendering pixelated
</style>
