<script setup>
const { start } = useLoadingIndicator();
start({ force: true });

import AboutSection from "@/components/Home/AboutSection.vue";
import Hero from "@/components/Home/Hero.vue";
import Services from "@/components/Home/Services.vue";
import GaitPlateSection from "@/components/Home/GaitPlateSection.vue";
import FreeConsutationSection from "@/components/Home/FreeConsutationSection.vue";
import Team from "@/components/Home/Team.vue";
import Reviews from "@/components/Home/Reviews.vue";
import News from "@/components/Home/News.vue";
</script>

<template>
  <Hero />
  <Services class="mt-[-80px]" />
  <AboutSection />
  <GaitPlateSection />
  <FreeConsutationSection />
  <Team />
  <Reviews />
  <News />
</template>
