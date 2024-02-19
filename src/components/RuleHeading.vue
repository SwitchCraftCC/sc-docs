<template>
  <h3 id="r{{rule}}">
    <a class="!no-underline" :href="`#r${rule}`">§{{rule}}</a>
    <slot />
  </h3>
</template>

<script>
export default {
  props: {
    rule: String
  }
}
</script>
