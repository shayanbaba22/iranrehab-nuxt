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

start({ force: true });

const { data: center, status: status } = await useFetch(
  `/api/centers/${slug.value}`,
  {
    transform: ({ data }) => data[0] || null,
  }
);

const { data: city } = await useFetch("/api/city", {
  query: {
    filter: `{ "id": { "_eq": "${center.value.selected_city}" } }`,
  },
  transform: ({ data }) => ({ city: data[0]?.city || "نامشخص" }),
});

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => ({ site_name: data.site_name }),
});

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
