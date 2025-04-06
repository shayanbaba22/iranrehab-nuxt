<template>
  <NuxtLink
    :to="url"
    class="p-2 text-sm text-white rounded-lg hover:bg-accent-1 transition-all delay-100"
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
