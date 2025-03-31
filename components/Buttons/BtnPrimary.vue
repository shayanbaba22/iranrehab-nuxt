<template>
  <NuxtLink
    :href="url"
    class="flex flex-row items-center pr-5 w-[180px] h-[44px] bg-primary-1 rounded-full relative [&_div:nth-child(2)]:hover:border-r-0 overflow-hidden shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)]"
  >
    <div class="text-white text-base">{{ text }}</div>
    <div
      class="transition-all duration-500 border-b-[46px] border-b-white border-l-0 border-l-transparent border-r-[12px] border-r-transparent rounded-bl-full rounded-tl-full w-[55px] h-[44px] absolute left-[-1px]"
    >
      <ArrowLeftBtn class="translate-y-[10px] translate-x-[-6px]" />
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
import ArrowLeftBtn from "@/assets/icons/ArrowLeftBtn.vue";
</script>
