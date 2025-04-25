<script setup>
import Notice from "@/assets/icons/Notice";
import MobileMenu from "@/components/Header/MobileMenu.vue";
import NavigationItems from "@/components/Header/NavigationItems.vue";
import Instagram from "@/assets/icons/Instagram.vue";
import Telegram from "@/assets/icons/Telegram.vue";
import Aparat from "@/assets/icons/Aparat.vue";

const { data: settings } = await useFetch(`/api/settings`, {
  transform: ({ data }) => {
    return {
      logo: data.logo,
      site_name: data.site_name,
      instagram: data.instagram,
      telegram: data.telegram,
      aparat: data.aparat,
    };
  },
});
</script>

<template>
  <div class="flex flex-col items-center p-2.5 w-full">
    <div
      class="w-full xl:max-w-[1280px] flex flex-row justify-between bg-white border-4 border-primary-400 shadow-lg py-6 px-2 sm:px-6 rounded-2xl items-center z-40"
    >
      <MobileMenu />
      <NuxtLink to="/">
        <NuxtImg
          :src="`${useRuntimeConfig().public.apiUrl}/assets/${
            settings.logo
          }?quality=80&format=webp&width=130`"
          :alt="settings.site_name"
          class="order-2 lg:order-1 w-[100px] sm:w-[130px]"
          :width="130"
          format="webp"
        />
      </NuxtLink>
      <NavigationItems class="hidden lg:grow lg:flex" />
    </div>
    <div
      class="flex flex-row content-center justify-between items-center w-full xl:max-w-[1280px] p-3.5 z-30"
    >
      <div
        class="sm:flex hidden flex-row leading-5 text-sm gap-1.5 text-primary-1"
      >
        <Notice />
        پایگاه اطلاع رسانی مرکز جامع توانبخشی ایران
      </div>
      <div class="flex gap-4">
        <NuxtLink :to="settings.instagram" aria-label="اینستاگرام">
          <Instagram />
        </NuxtLink>
        <NuxtLink :to="settings.telegram" aria-label="تلگرام">
          <Telegram />
        </NuxtLink>
        <NuxtLink :to="settings.aparat" aria-label="آپارات">
          <Aparat />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
