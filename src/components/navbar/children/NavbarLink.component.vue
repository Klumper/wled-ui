<template>
  <router-link v-bind="$attrs" >
    <slot />
  </router-link>
</template> 

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    
  },
})
</script>

<style>

</style>