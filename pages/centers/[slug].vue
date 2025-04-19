<template>
  <PageTitle :title="center.title" :breadcrumbArray="breadcrumbArray" />
  <SingleCenter :center="center" :city="city" :status="status" />
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import SingleCenter from "@/components/Centers/SingleCenter.vue";

const { start } = useLoadingIndicator();
start({ force: true });

const route = useRoute();
const slug = computed(() => route.params.slug);

const { data: center, status } = await useFetch(`/api/centers/${slug.value}`, {
  lazy: true,
  transform: ({ data }) => {
    return data[0];
  },
  watch: [slug],
});

console.log(center.value);
const selectedCity = computed(() => center.value.selected_city);

const { data: city } = await useFetch(`/api/city`, {
  lazy: true,
  query: computed(() => ({
    filter: `{ "id" : { "_eq": "${selectedCity.value}" } }`,
  })),
  transform: ({ data }) => {
    return { city: data[0].city };
  },
  watch: [selectedCity],
});

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
    };
  },
});

useHead({
  title: `${center.value.title} - ${settings.value.site_name}`,
});

const breadcrumbArray = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "مراکز", href: "/centers" },
  { id: 3, title: center.value.title, href: null },
];
</script>
