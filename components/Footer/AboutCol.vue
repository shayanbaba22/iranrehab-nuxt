<template>
  <div class="flex flex-col w-full lg:w-[calc(33%-10px)]">
    <NuxtLink to="/">
      <NuxtImg alt="مرکز جامع توانبخشی ایران" :src="LogoFooter"></NuxtImg>
    </NuxtLink>
    <p class="text-justify text-sm leading-7 text-white mt-5">
      مرکز جامع توانبخشی ایران در سال ۱۳۸۳ توسط گروهی از پزشکان فوق تخصص مغز و
      اعصاب و متخصصین توانبخشی ،با مجوز وزارت بهداشت و درمان تاسیس گردید. رویکرد
      درمانی این کلینیک کاملاً بر اساس متد های استاندارد جهانی و روش‌های ابداعی
      نوین توانبخشی می باشد مرکز جامع توانبخشی ایران در حال حاضر با دو شعبه
      مرکزی و غرب تهران به عنوان یکی از شاخص ترین و معتبرترین مراکز توانبخشی در
      زمینه کاردرمانی، گفتار درمانی و فیزیوتراپی کشور شناخته می‌شود.
    </p>
    <div class="flex gap-4 mt-4">
      <NuxtLink
        :href="settings.instagram"
        class="p-2.5 bg-white rounded-lg [&_svg_path]:fill-[#727E87] hover:bg-[#ddd] cursor-pointer transition duration-300"
        aria-label="اینستاگرام"
      >
        <Instagram />
      </NuxtLink>
      <NuxtLink
        :href="settings.telegram"
        class="bg-white p-2.5 rounded-lg [&_svg_path]:fill-[#727E87] hover:bg-[#ddd] cursor-pointer transition duration-300"
        aria-label="تلگرام"
      >
        <Telegram />
      </NuxtLink>
      <NuxtLink
        :href="settings.aparat"
        class="bg-white p-2.5 rounded-lg [&_svg_path]:fill-[#727E87] hover:bg-[#ddd] cursor-pointer transition duration-300"
        aria-label="آپارات"
      >
        <Aparat />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Instagram from "@/assets/icons/Instagram.vue";
import Telegram from "@/assets/icons/Telegram.vue";
import Aparat from "@/assets/icons/Aparat.vue";
import LogoFooter from "/LogoFooter.webp";

const { data: settings } = await useFetch(`/api/settings`, {
  transform: ({ data }) => {
    return {
      instagram: data.instagram,
      telegram: data.telegram,
      aparat: data.aparat,
    };
  },
});
</script>
