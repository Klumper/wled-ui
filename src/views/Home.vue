<template>
  <div class="home">
    <NavbarComponent />
    <pre>{{ info }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useInfoStore } from '@/store/info';
import { MutationType } from '@/models/store';
import NavbarComponent from '@/components/navbar/Navbar.component.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NavbarComponent,
  },
  setup () {
    const infoStore = useInfoStore();
    const info = computed(() => infoStore.state.info);
    const loading = computed(() => infoStore.state.loading);
    onMounted(() => {
      infoStore.action(MutationType.info.loadItems);
    });
    return {
      info,
      loading,
    };
  },
});
</script>
