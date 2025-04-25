<template>
  <section
    class="flex flex-col justify-center items-center gap-5 bg-gradient-to-l from-[#125483] to-[#00AFF0] h-screen"
  >
    <NuxtImg
      src="/404LogoBg.svg"
      class="absolute bottom-5 right-5"
      :width="200"
      format="webp"
      alt="لوگو"
    ></NuxtImg>
    <p class="text-[86px] text-white font-bold">{{ error.statusCode }}</p>
    <p v-if="error.statusCode == 404" class="text-2xl text-white mb-5">
      متاسفانه صفحه ی مورد نظر پیدا نشد !!
    </p>
    <p v-else class="text-2xl text-white mb-5">
      خطای ناشناخته، لطفا دوباره تلاش کنید.
      {{ error.message }}
    </p>
    <BtnPrimary text="بازگشت به خانه" url="/" />
    
  </section>
</template>

<script setup>
import BtnPrimary from "@/components/Buttons/BtnPrimary.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });
defineProps(["error"]);

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
