<template>
  <div class="rule" :class="{ sub: sub }">
    <span class="rule-number">{{ rule }}</span>
    <span class="rule-contents">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rule: String,
    sub: Boolean
  }
}
</script>

<style lang="stylus" scoped>
  .rule
    display flex
    // margin-left 1rem
    margin-bottom 0.5rem

    .rule-number
      display inline-block

      margin-right 3px
      min-width 24px

      font-weight bold

      flex-shrink 0

    .rule-contents
      color $mid

    &.sub
      // margin-left calc(1rem + 27px)
      margin-left 27px
</style>
