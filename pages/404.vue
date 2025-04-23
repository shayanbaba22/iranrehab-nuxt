<template>
  <section
    class="flex flex-col justify-center items-center gap-5 bg-gradient-to-l from-[#125483] to-[#00AFF0] h-screen"
  >
    <NuxtImg
      :src="LogoBg"
      class="absolute bottom-5 right-5"
      alt="لوگو"
    ></NuxtImg>
    <p class="text-[86px] text-white font-bold">404</p>
    <p class="text-2xl text-white mb-5">متاسفانه صفحه ی مورد نظر پیدا نشد !!</p>
    <BtnPrimary text="بازگشت به خانه" url="/" />
    <NavigationItems class="grow-0 [&_li_a]:text-white mt-3 hidden lg:flex" />
  </section>
</template>

<script setup>
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";
import NavigationItems from "@/components/Header/NavigationItems.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
    };
  },
});

useHead({
  title: `موردی یافت نشد - ${settings.value.site_name}`,
  status: 404,
});

definePageMeta({
  layout: "error",
});

finish();
</script>
