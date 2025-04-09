<template>
  <footer
    class="flex flex-col lg:flex-row justify-center bg-[url('/FreeConsultation.svg')] bg-cover bg-center bg-no-repeat rounded-t-3xl mt-16 p-2.5 lg:p-0"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col lg:flex-row gap-14 justify-between items-start rounded-3xl z-50 lg:my-14 p-2.5 lg:p-0"
    >
      <AboutCol />
      <ContactCol />
      <BlogCol />
    </div>
  </footer>
</template>

<script setup>
import AboutCol from "@/components/Footer/AboutCol.vue";
import ContactCol from "@/components/Footer/ContactCol.vue";
import BlogCol from "@/components/Footer/BlogCol.vue";
</script>
