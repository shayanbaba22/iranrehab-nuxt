<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="w-full h-[250px] border-[6px] border-white rounded-2xl shadow-lg z-1 overflow-hidden"
    >
      <NuxtImg :src="img" :alt="title" class="h-full w-full object-cover"></NuxtImg>
    </div>
    <h2
      class="w-[80%] p-4 border-primary-500 border-[3px] bg-white text-center text-textpr text-base rounded-xl mt-[-34px]"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>
