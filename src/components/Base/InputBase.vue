<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      v-bind="$attrs"
      class="block w-full rounded-lg bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"])
</script>
