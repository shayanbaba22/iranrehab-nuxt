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
const slug = ref(route.params.slug)

const { data: center, status } = await useFetch(`/api/centers`, {
  lazy: true,
  query: {
    filter: `{ "slug" : { "_eq": "${slug.value}" } }`,
  },
  transform: ({ data }) => {
    return data[0];
  },
  watch: [slug],
});

const { data: city } = await useFetch(`/api/city`, {
  lazy: true,
  query: { filter: `{ "id" : { "_eq": "${center.value.selected_city}" } }` },
  transform: ({ data }) => {
    return { city: data[0].city };
  },
  watch: [slug],
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

console.log(center , city)
</script>
