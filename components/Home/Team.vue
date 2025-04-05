<template>
<section class="flex flex-row items-center justify-center p-2 mt-[60px] bg-[url('/GaitPlateBg.svg')] bg-cover bg-center bg-no-repeat">
      <div class="w-full xl:max-w-[1280px] flex flex-col justify-between p-6 z-50">
        <div class="flex flex-row w-full justify-between items-center">
          <div>
            <p class="text-lg lg:text-3xl font-bold text-white mb-2">
              همکاران مجرب و حرفه ایی
            </p>
            <p class="text-[11px] lg:text-lg text-white">
              تیم متخصص مرکز توانبخشی ایران
            </p>
          </div>
          <CtaBtnGreen url="#" text="مشاهده همه" />
        </div>
        <TeamCarousel class="overflow-hidden" />
      </div>
    </section>
</template>

<script setup>
import TeamCarousel from "@/components/Carousels/TeamCarousel.vue";
</script>

