<template>
  <span class="nyi">
    <abbr title="Not Yet Implemented">NYI</abbr>
  </span>
</template>

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

    .rule-contents
      color $mid

    &.sub
      // margin-left calc(1rem + 27px)
      margin-left 27px
</style>
