<template>
  <span class="whitespace-nowrap inline-flex items-baseline">
    <span
      class="inline-block w-[1em] h-[1em] mr-[0.25em] rounded relative bottom-[-0.1em]"
      :style="{ backgroundColor: color }"
    />
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
