<template>
  <section
    class="flex flex-col items-center w-full z-50 p-2 relative"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col justify-between bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-50"
    >
      <div class="flex flex-row w-full justify-between items-center">
        <div>
          <p class="text-lg lg:text-3xl font-bold text-textpr mb-2">
            خدمات ما
          </p>
          <p class="text-sm lg:text-lg">
            خدمات اصلی
            <span class="text-accent-1">مرکز توانبخشی ایران</span>
          </p>
        </div>
        <CtaButton url="#" text="مشاهده همه" class="bg-accent-700" />
      </div>
      <MainServicesCarousel class="overflow-hidden mt-4" />
    </div>
  </section>
</template>

<script setup>
import CtaButton from "@/components/Buttons/CtaButton.vue";
import MainServicesCarousel from "@/components/Carousels/MainServicesCarousel.vue";
</script>
