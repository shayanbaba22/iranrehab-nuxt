<template>
  <NuxtLink
    :to="url"
    class="flex flex-col items-center justify-center w-[180px] h-[44px] bg-transparent rounded-full relative [&_div:nth-child(2)]:hover:border-r-0"
  >
    {{ text }}
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
</script>
