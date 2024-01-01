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
        "inline-block relative mx-[2px] w-[18px] h-auto [image-rendering:pixelated]": true,
        "bottom-[-6px]": !this.svg,
        "bottom-[-3px]": this.svg
      };
    }
  }
}
</script>
