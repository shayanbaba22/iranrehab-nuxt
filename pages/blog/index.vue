<template>
    <PageTitle title="بلاگ" :breadcrumbArray="breadcrumbArray" />
    <Blog />
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import Blog from "@/components/Blog/Blog.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const breadcrumbArray = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "بلاگ", href: null },
];

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
    };
  },
});

useHead({
  title: `بلاگ - ${settings.value.site_name}`,
});

finish();
</script>

