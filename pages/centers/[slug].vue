<template>
  <PageTitle :title="center.title" :breadcrumbArray="breadcrumbArray" />
  <SingleCenter :center="center" :city="city" :status="status" />
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import SingleCenter from "@/components/Centers/SingleCenter.vue";

const route = useRoute();
const { start, finish } = useLoadingIndicator();

const slug = ref(route.params.slug);
const center = ref({});
const city = ref({});
const settings = ref({});
const status = ref("");

start({ force: true });

const { data: centerData, status: centerStatus } = await useFetch(
  `/api/centers/${slug.value}`,
  {
    transform: ({ data }) => data[0] || null,
  }
);

center.value = centerData.value;
status.value = centerStatus.value;

if (center.value?.selected_city) {
  const { data: cityData } = await useFetch("/api/city", {
    query: {
      filter: `{ "id": { "_eq": "${center.value.selected_city}" } }`,
    },
    transform: ({ data }) => ({ city: data[0]?.city || "نامشخص" }),
  });

  city.value = cityData.value;
}

const { data: settingsData } = await useFetch("/api/settings", {
  transform: ({ data }) => ({ site_name: data.site_name }),
});
settings.value = settingsData.value;

useHead({
  title: `${center.value.title} - ${settings.value.site_name}`,
});

finish();

const breadcrumbArray = computed(() => [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "مراکز", href: "/centers" },
  { id: 3, title: center.value.title || "در حال بارگذاری", href: null },
]);
</script>
