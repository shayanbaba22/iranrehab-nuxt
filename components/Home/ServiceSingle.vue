<template>
  <div
    class="flex flex-col justify-center items-center w-[calc(50%-20px)] last:w-full lg:w-[calc(20%-20px)] lg:last:w-[calc(20%-20px)] my-4 lg:my-0"
  >
    <slot></slot>
    <h3 class="flex flex-col justify-center items-center pt-4">
      <span class="font-bold pb-2">{{title}}</span>
      <span class="text-[#9D9D9D]">{{subTitle}}</span>
    </h3>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: null,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>
