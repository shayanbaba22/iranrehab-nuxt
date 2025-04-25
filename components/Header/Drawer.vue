<script setup>
import Logo from "@/public/logo.svg";
import Close from "@/assets/icons/Close";
import NavigationItems from "@/components/Header/NavigationItems.vue";

const toggleMenu = inject("toggleMenuProvider");
</script>

<template>
  <div
    class="flex flex-col-reverse z-50 rounded-e-3xl shadow-xl fixed top-0 right-0 bg-white w-60 h-full justify-end p-4 transition-all duration-500 border border-[#eee] lg:hidden"
  >
    <NuxtImg
      src="/logo.svg"
      alt="مرکز جامع توانبخشی ایران"
      class="order-2 lg:order-1 mb-6 w-[100px]"
      :width="100"
      format="webp"
      loading="lazy"
    />
    <NavigationItems class="flex lg:hidden" />
    <div
      class="items-center justify-center flex flex-col rounded-lg w-7 h-7 bg-primary-1 absolute left-4 top-4"
      @click="toggleMenu"
    >
      <Close />
    </div>
  </div>
</template>
