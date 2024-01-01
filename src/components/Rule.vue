<template>
  <div class="flex mb-2" :class="{ [`ml-[27px]`]: sub }">
    <span class="inline-block mr-[3px] min-w-[24px] font-bold flex-shrink-0">
      {{ rule }}
    </span>
    <span class="text-text-muted">
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
