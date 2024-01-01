<template>
  <span class="text-[100%] whitespace-nowrap">
    <KristSymbol class="inline-block relative bottom-[0.1em] text-[0.75em] text-text-muted" />
    <span class="font-bold">{{ value.toLocaleString() }}</span>
    <span class="before:content-['_']" v-if="long">KST</span>
  </span>
</template>

<script>
import KristSymbol from "./KristSymbol.vue";

export default {
  props: {
    value: Number,
    long: Boolean
  },
  components: { KristSymbol }
};
</script>
