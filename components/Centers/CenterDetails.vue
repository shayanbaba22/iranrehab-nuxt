<template>
  <div
    class="flex flex-col w-full lg:w-[calc(25%-20px)] gap-4 border-2 border-dashed border-[#dadada] p-3 rounded-2xl items-center justify-center"
  >
    <p class="text-[12px] text-[#797979]">{{ title }}</p>
    <p class="text-sm font-bold text-[#333]">{{ subTitle }}</p>
  </div>
</template>

<script setup>
defineProps({
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
