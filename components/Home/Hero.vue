<template>
  <section
    class="flex flex-col items-center justify-center mt-[-200px] p-2 lg:h-[800px] h-[1200px] relative"
  >
    <video
      muted
      autoPlay
      loop
      playsInline
      disablePictureInPicture
      class="absolute w-full h-full object-cover z-1"
    >
      <source src="/hero.webm" type="video/webm" />
    </video>
    <div class="block w-full absolute top-0 lg:h-[800px] h-[1200px] z-2">
      <div class="w-full h-full bg-[#000000d3] absolute top-0"></div>
    </div>

    <div class="z-10">
      <h1
        class="text-3xl sm:text-4xl text-primary-1 font-bold mb-6 mt-[120px] text-center"
      >
        مرکز جامع توانبخشی ایران
      </h1>
      <h2 class="text-md sm:text-lg text-white font-bold mb-14 text-center">
        مرکز کاردرمانی و کلینیک گفتاردرمانی
      </h2>
      <div class="flex flex-col items-center lg:flex-row gap-4 lg:gap-0">
        <BtnPrimary text="دریافت نوبت" url="tel:02166430489" />
        <BtnSecondary class="text-white" text="درباره ما" url="/about" />
      </div>
    </div>
    <ServicesHero />
  </section>
</template>

<script setup>
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";
import BtnSecondary from "@/components/Buttons/BtnSecondary.vue";
import ServicesHero from "@/components/Home/ServicesHero.vue";
</script>
