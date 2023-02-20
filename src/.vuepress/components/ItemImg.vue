<template>
  <span class="item">
    <img :src="`/img/${img}.png`" :alt="name" :title="name" :class="className" />
    {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    img: { type: String, required: true },
    name: String,
    mid: Boolean
  },
  computed: {
    className() {
      return this.mid ? "item-img mid" : "item-img";
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    .item-img
      vertical-align bottom

      &.mid
        vertical-align middle
</style>
