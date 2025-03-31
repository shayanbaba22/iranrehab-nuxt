<script setup>
const { start,set } = useLoadingIndicator();
start({ force: true });
import AboutSection from '@/components/Home/AboutSection.vue';
</script>

<template>
  <AboutSection/>
</template>
