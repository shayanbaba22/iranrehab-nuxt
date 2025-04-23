<template>
  <PageTitle title="درباره ما" :breadcrumbArray="breadcrumbArray" />
  <section
    class="flex flex-col items-center w-full z-50 mt-[-80px] p-2 [&_.services]:mt-[80px]"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col justify-between gap-5 bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-50 items-start [&_.about-section]:mt-0"
    >
      <AboutSection />
    </div>
    <Services class="mt-16" />
  </section>
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import AboutSection from "@/components/Home/AboutSection.vue";
import Services from "@/components/Home/Services.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const breadcrumbArray = computed(() => [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "درباره ما", href: null },
]);

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
    };
  },
});

useHead({
  title: `درباره ما - ${settings.value.site_name}`,
});

finish();
</script>
