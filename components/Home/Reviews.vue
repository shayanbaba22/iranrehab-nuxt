<template>
  <section class="flex flex-col items-center w-full mt-[60px] z-50 p-2 relative">
    <div
      class="w-full xl:max-w-[1280px] flex flex-col justify-centers items-center rounded-3xl p-6 z-50"
    >
      <p class="text-2xl lg:text-3xl font-bold text-textpr mb-2">
        نظرات مراجعین
      </p>
      <p class="text-sm lg:text-base mt-1 mb-4 text-primary-1">
        نظرات مراجعین و بیماران مرکز جامع توانبخشی ایران
      </p>
      <ReviewsCarousel class="overflow-hidden" />
    </div>
  </section>
</template>

<script setup>
import ReviewsCarousel from "@/components/Carousels/ReviewsCarousel.vue";
</script>
