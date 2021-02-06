<template>
  <!--
    Profile dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div 
    class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <img 
      class="block my-3 mx-auto h-10 w-10 rounded-full"
      src="https://avatars.githubusercontent.com/u/21045690?s=400&v=4"
      alt=""
    >
    <div v-if="!loading" class="text-sm text-gray-700 ">
      <div class="text-center my-3">
        {{ info.name }}
      </div>
      <div class="text-center text-xs my-3">
        WLED {{ info.ver }}
      </div>
      <div class="px-4 py-2 relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <div class="text-xs font-semibold text-pink-600">
            Wifi signal
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-pink-600">
              {{ info.wifi.signal }}%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-pink-200">
          <div 
            :style="{ width: `${info.wifi.signal}%` }"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          />
        </div>
      </div>
    </div>
    <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</span>
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
  </div>
</template>

<script>
import { defineComponent, computed, watch, onMounted } from 'vue';
import { useInfoStore } from '@/store/info';
import { MutationType } from '@/models/store';

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  setup (props) {
    const infoStore = useInfoStore();
    const info = computed(() => infoStore.state.info);
    const loading = computed(() => infoStore.state.loading);
    onMounted(() => {
      infoStore.action(MutationType.info.loadItems);
    });

    const watcher = watch(() => props.open, (first, second) => {
      console.log(
        'Watch props.open function called with args:',
        first,
        second,
      );
    });
    return {
      info,
      loading,
      watcher,
    };
  },
});
</script>

<style>

</style>