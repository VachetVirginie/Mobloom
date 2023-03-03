<template>
  <button class="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg text-center" :class="`${color}`">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  color: String,
  text: String
})


</script>
