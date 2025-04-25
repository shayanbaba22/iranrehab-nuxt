<template>
  <section
    class="flex flex-row items-center justify-center mt-[80px] p-2 pt-0 lg:p-0 bg-[url('/GaitPlateBg.svg')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col lg:flex-row justify-between p-2.5"
    >
      <div
        class="flex flex-col justify-center items-center lg:w-[calc(40%-20px)] mt-[-10px] lg:mb-[-60px]"
      >
        <NuxtImg
          alt="گیت پلیت"
          :src="gaitplate"
          class="w-full"
          format="webp"
        ></NuxtImg>
      </div>
      <div
        class="lg:w-[calc(60%-20px)] flex flex-col gap-5 p-2.5 justify-center"
      >
        <p class="text-3xl text-white font-bold">مرکز جامع توانبخشی ایران</p>
        <p class="text-lg text-white">
          گیت پلیت ابداعی کارآمد در کمک برای تعادل و راه رفتن کودکان فلج مغزی
        </p>
        <p class="text-sm text-white text-justify leading-8">
          وسیله کمکی برای تعادل در ایستادن و راه رفتن گیت پلیت یا gait plate نام
          دارد این وسیله توسط کاردرمانگر فرهنگ محمدخانی طراحی شده و پس از سالیان
          متمادی استفاده در جهت بهبود وضعیت ایستادن و راه رفتن کودکان فلج مغزی
          کمک شایانی نموده و کارایی عملکردی خود را در موارد متعدد به اثبات
          رسانده است.
        </p>
        <div class="flex flex-col items-center lg:flex-row gap-4 lg:gap-0 mb-5">
          <BtnPrimary text="مطالعه بیشتر" url="#" class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";
import gaitplate from "/gaitplate.webp";
</script>
