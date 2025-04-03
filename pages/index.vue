<script setup>
const { start, set } = useLoadingIndicator();
start({ force: true });
import AboutSection from "@/components/Home/AboutSection.vue";
import Hero from "@/components/Home/Hero.vue"
import Services from "@/components/Home/Services.vue";
</script>

<template>
  <Hero />
  <Services />
  <AboutSection />
  <GaitPlateSection />
  <FreeConsutationSection />
  <Team />
  <Reviews />
  <News />
</template>
