<template>
  <span class="krist-value">
    <KristSymbol /><span class="krist-value-amount">{{ value.toLocaleString() }}</span>
    <span class="krist-value-long" v-if="long">KST</span>
  </span>
</template>

<script>
import KristSymbol from './KristSymbol.vue'
export default {
  props: {
    value: Number,
    long: Boolean
  },
  components: { KristSymbol }
}
</script>

<style lang="stylus" scoped>
  .krist-value
    font-size 100%
    white-space nowrap

    svg.krist-symbol
      position relative
      bottom -0.1em
      font-size 0.75em
      color $mid

    .krist-value-amount
      font-weight bold

    .krist-value-long
      &:before
        content " "
</style>
