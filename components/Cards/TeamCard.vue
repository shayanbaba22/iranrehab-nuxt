<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="w-full h-[400px] border-[12px] border-white rounded-[34px] shadow-lg z-1 overflow-hidden"
    >
      <NuxtImg
        :src="img"
        :alt="name"
        class="relative"
        format="webp"
        :width="295"
        :height="400"
      ></NuxtImg>
      <div
        class="absolute top-0 right-0 left-0 m-auto w-[100%] h-[100%] bg-gradient-to-b from-transparent to-primary-200 rounded-[34px]"
      ></div>
    </div>
    <div
      class="w-[80%] p-4 bg-white rounded-3xl absolute left-0 right-0 bottom-5 m-auto"
    >
      <p class="text-center text-textpr text-base">{{ name }}</p>
      <p class="text-center text-[#707070] text-[13px] mt-2">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});
</script>
