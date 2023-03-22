<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <input
      type="text"
      :value="modelValue"
      v-bind="$attrs"
      class="block w-full rounded-lg border border-gray-300 bg-grey p-2.5 text-gray-900 placeholder:text-gray-500 sm:text-sm"
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
