<template>
  <PageTitle title="مراکز" :breadcrumbArray="breadcrumbArray" />
  <Centers />
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import Centers from "@/components/Centers/Centers.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const breadcrumbArray = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "مراکز", href: null },
];

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
    };
  },
});

useHead({
  title: `مراکز - ${settings.value.site_name}`,
});

finish();
</script>
