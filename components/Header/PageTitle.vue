<template>
  <section
    class="flex flex-col items-center justify-center mt-[-200px] p-2 lg:h-[450px] h-[400px] bg-[url('/PageTitleBg.webp')] bg-no-repeat bg-cover bg-center relative"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col p-2 mt-[140px] items-center lg:items-start"
    >
      <h1 class="text-white text-xl lg:text-[34px] font-bold mb-4 z-10">
        {{ title }}
      </h1>
      <Breadcrumb :breadcrumbArray="breadcrumbArray" />
      <div
        class="w-full h-full bg-[#0000008c] absolute top-0 right-0 z-1"
      ></div>
    </div>
  </section>
</template>

<script setup>
import Breadcrumb from "@/components/Header/Breadcrumb.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  breadcrumbArray: {
    type: Array,
    required: true,
  },
});
</script>
