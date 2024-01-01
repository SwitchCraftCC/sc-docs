<template>
  <span className="inline-block">
    <img :src="`/img/${img}.png`" :alt="alt || name" :title="alt || name" :class="className" />
    {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    img: { type: String, required: true },
    alt: String,
    name: String,
    mid: Boolean
  },
  computed: {
    className() {
      return this.mid ? "inline-block align-middle" : "inline-block align-bottom";
    }
  }
}
</script>
