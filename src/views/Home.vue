<template>
  <div class="home">
    <NavbarComponent />
    <pre>{{ info }}</pre>
    <ColorpickerComponent @color:change="onColorChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useInfoStore } from '@/store/info';
import { MutationType } from '@/models/store';
import NavbarComponent from '@/components/navbar/Navbar.component.vue';
import ColorpickerComponent from '@/components/colorpicker/Colorpicker.component.vue';
import iro from '@jaames/iro';

export default defineComponent({
  name: 'Home',
  components: {
    NavbarComponent,
    ColorpickerComponent,
  },
  setup () {
    const infoStore = useInfoStore();
    const info = computed(() => infoStore.state.info);
    const loading = computed(() => infoStore.state.loading);
    onMounted(() => {
      infoStore.action(MutationType.info.loadItems);
    });

    const onColorChange = (color: iro.Color) => {
      console.log(color);
    };
    return {
      info,
      loading,
      onColorChange,
    };
  },
});
</script>
