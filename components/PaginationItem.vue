<template>
  <li
    class="flex items-center justify-center w-[30px] h-[30px] leading-tight text-white rounded-lg bg-primary-1 hover:bg-primary-800 ease-in transition-all cursor-pointer"
    :class="{
      'bg-primary-1 text-white': isActive,
      'opacity-50': isActive,
    }"
  >
    {{ page }}
  </li>
</template>

<script setup>
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
