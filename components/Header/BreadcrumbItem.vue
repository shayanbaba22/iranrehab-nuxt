<template>
  <li class="flex flex-row justify-center items-center">
    <NuxtLink
      :href="href"
      class="text-[#ffffff80] hover:text-white text-sm last-pages"
      v-if="href"
    >
      {{ title }}
    </NuxtLink>
    <span class="text-white mr-2 text-sm seperator" v-if="href">/</span>
    <p class="font-bold text-white text-sm current-page" v-if="!href">
      {{ title }}
    </p>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
  },
});
</script>
