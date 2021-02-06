<template>
  <div id="color-picker" />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue';
import iro from '@jaames/iro';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#F00',  
    },
  },
  emits: [
    'input:change',
    'input:start',
    'input:move',
    'input:end',
    'color:init',
    'color:change',
    'color:remove',
    'color:setActive',
    'mount',
  ],
  setup (props, { emit }) {
    const colorPicker: iro.ColorPicker = iro.ColorPicker('#color-picker', {
      color: props.color,
    });

    // #region Input event handlers
    const inputChangeCallback = (color: iro.Color) => emit('input:change', color);
    const inputStartCallback  = (color: iro.Color) => emit('input:start', color);
    const inputMoveCallback   = (color: iro.Color) => emit('input:move', color);
    const inputEndCallback    = (color: iro.Color) => emit('input:end', color);
    // #endregion

    // #region Color event handlers
    const colorInitCallback       = (color: iro.Color) => emit('color:init', color);
    const colorChangeCallback     = (color: iro.Color) => emit('color:change', color);
    const colorRemoveCallback     = (color: iro.Color) => emit('color:remove', color);
    const colorSetActiveCallback  = (color: iro.Color) => emit('color:setActive', color);
    // #endregion


    const initializeEventHandlers = () => {
      colorPicker.on('input:change', inputChangeCallback);
      colorPicker.on('input:start', inputStartCallback);
      colorPicker.on('input:move', inputMoveCallback);
      colorPicker.on('input:end', inputEndCallback);

      colorPicker.on('color:init', colorInitCallback);
      colorPicker.on('color:change', colorChangeCallback);
      colorPicker.on('color:remove', colorRemoveCallback);
      colorPicker.on('color:setActive', colorSetActiveCallback);
    };

    const removeEventHandlers = () => {
      colorPicker.off('input:change', inputChangeCallback);
      colorPicker.off('input:start', inputStartCallback);
      colorPicker.off('input:move', inputMoveCallback);
      colorPicker.off('input:end', inputEndCallback);

      colorPicker.off('color:init', colorInitCallback);
      colorPicker.off('color:change', colorChangeCallback);
      colorPicker.off('color:remove', colorRemoveCallback);
      colorPicker.off('color:setActive', colorSetActiveCallback);
    };

    const onMountCallback = (picker: iro.ColorPicker) => {
      emit('mount', picker);
      initializeEventHandlers();
    };

    colorPicker.on('mount', onMountCallback);

    onBeforeUnmount (() => {
      removeEventHandlers();
    });
    
    return {
      colorPicker,
    };
  },
});
</script>
