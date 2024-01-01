<template>
  <ItemImg :img="`dye/${name}_dye`" :name="color" mid />
</template>

<script>
import ItemImg from "./ItemImg.vue";

export default {
  props: {
    color: String
  },
  computed: {
    name() {
      return this.color.replace(/ /g, "_").toLowerCase();
    }
  },
  components: { ItemImg }
}
</script>
