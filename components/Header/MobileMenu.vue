<script setup>
import HamburgerMenu from "@/assets/icons/HamburgerMenu";
import Drawer from "@/components/Header/Drawer.vue";

const open = ref(false);
function toggleMenu() {
  open.value = !open.value;
}

provide("toggleMenuProvider", toggleMenu);
</script>

<template>
  <div class="lg:hidden bg-primary-1 p-2.5 rounded-lg z-20" @click="toggleMenu">
    <HamburgerMenu />
  </div>
  <div
    v-if="open"
    @click="toggleMenu"
    class="w-full h-full bg-[#00000020] fixed top-0 left-0 z-10 lg:hidden"
  ></div>
  <Drawer
    :class="[open ? `translate-x-[0px]` : `translate-x-[120%]`]"
    class="z-50"
  />
</template>
