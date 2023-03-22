<template>
  <button
    class="inline-flex rounded border-0 py-2 px-6 text-center text-lg text-white focus:outline-none"
    :class="`${color}`"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String,
    default: 'bg-primary',
  },
  text: {
    type: String,
    default: 'Button',
  },
})


</script>
