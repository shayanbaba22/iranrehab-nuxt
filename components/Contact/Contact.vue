<template>
  <section
    class="flex flex-col items-center w-full z-50 mt-[-80px] p-2 [&_.services]:mt-[80px]"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col lg:flex-row justify-between gap-5 bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-50 items-start [&_.about-section]:mt-0"
    >
      <ContactCol class="w-full lg:w-[calc(60%-10px)]" />
      <ContactForm class="w-full lg:w-[calc(40%-10px)]" />
    </div>
  </section>
</template>

<script setup>
import ContactCol from "@/components/Contact/ContactCol.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
</script>
