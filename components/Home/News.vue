<template>
  <section
    class="flex flex-col items-center w-full mt-[60px] z-50 p-2 relative"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col justify-centers items-center rounded-3xl p-6 z-50"
    >
      <p class="text-2xl lg:text-3xl font-bold text-textpr mb-2">آخرین اخبار</p>
      <p class="text-sm lg:text-base mt-1 mb-4 text-primary-1">
        برای مشاهده همه اخبار کلیک کنید
      </p>
      <CtaButtton url="/blog" text="مشاهده همه" class="bg-primary-700" />
      <NewsCarousel :posts="posts" />
    </div>
  </section>
</template>

<script setup>
import CtaButtton from "@/components/Buttons/CtaButton.vue";
import NewsCarousel from "~/components/Carousels/NewsCarousel.vue";
</script>
