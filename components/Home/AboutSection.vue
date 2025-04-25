<template>
  <section
    class="flex flex-row items-center justify-center mt-[80px] p-2 about-section"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col-reverse lg:flex-row justify-between"
    >
      <div class="lg:w-[calc(60%-20px)] flex flex-col gap-5 p-2.5">
        <p class="text-3xl text-primary-1 font-bold">
          مرکز جامع توانبخشی ایران
        </p>
        <p class="text-base text-textpr text-justify leading-8">
          مرکز جامع توانبخشی ایران در سال ۱۳۸۳ توسط گروهی از پزشکان فوق تخصص مغز
          و اعصاب و متخصصین توانبخشی ،با مجوز وزارت بهداشت و درمان تاسیس گردید.
          رویکرد درمانی این کلینیک کاملاً بر اساس متد های استاندارد جهانی و
          روش‌های ابداعی نوین توانبخشی می باشد مرکز جامع توانبخشی ایران در حال
          حاضر با دو شعبه مرکزی و غرب تهران به عنوان یکی از شاخص ترین و
          معتبرترین مراکز توانبخشی در زمینه کاردرمانی، گفتار درمانی و فیزیوتراپی
          کشور شناخته می‌شود. مفتخرم که گستره خدمات این موسسه از سطح کشور فراتر
          رفته و پذیرش بیماران از کشورهایی نظیر عراق، کویت ،ارمنستان، آذربایجان،
          افغانستان و حتی ایرانیان مقیم کشورهای اروپایی و آمریکایی نیز در
          کارنامه ما ثبت شده است. مرکز جامع توانبخشی ایران در سال ۱۳۸۹ موفق به
          کسب مجوز تخصصی توانبخشی کودکان فلج مغزی گردید.
        </p>
        <div class="flex flex-col items-center lg:flex-row gap-4 lg:gap-0 mb-5">
          <BtnPrimary text="درباره انجمن" url="/about" />
          <BtnSecondary
            class="text-primary-1"
            text="تماس با ما"
            url="/contact"
          />
        </div>
        <ServicesAbout />
      </div>
      <div
        class="flex flex-col justify-center items-center lg:w-[calc(40%-20px)] p-2.5"
      >
        <NuxtImg
          alt="درباره مرکز جامع توانبخشی ایران"
          :src="karadarmaniAbout"
          class="w-full object-cover"
          format="webp"
          :width="470"
          loading="lazy"
        ></NuxtImg>
      </div>
    </div>
  </section>
</template>

<script setup>
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";
import BtnSecondary from "@/components/Buttons/BtnSecondary.vue";
import ServicesAbout from "@/components/Home/ServicesAbout.vue";
import karadarmaniAbout from "/kardarmani-about.webp";
</script>
