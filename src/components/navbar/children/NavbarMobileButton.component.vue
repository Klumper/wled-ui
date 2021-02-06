<template>
  <!-- Mobile menu button-->
  <button 
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-expanded="false"
    @click="onClick"
  >
    <span class="sr-only">Open main menu</span>
    <!-- Icon when menu is closed. -->
    <!--
      Heroicon name: outline/menu

      Menu open: "hidden", Menu closed: "block"
    -->
    <svg 
      :class="open ? 'hidden' : 'block'"
      class="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <!-- Icon when menu is open. -->
    <!--
      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
    -->
    <svg
      :class="open ? 'block' : 'hidden'"
      class="hidden h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup (props, { emit }) {
    const onClick = () => emit('click');
    
    return {
      onClick,
    };
  },
});
</script>
