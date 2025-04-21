<template>
  <SingleBlog :post="post" :status="status" />
</template>

<script setup>
import SingleBlog from "@/components/Blog/SingleBlog.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const route = useRoute();
const slug = ref(route.params.slug);

const { data: post, status: status } = await useFetch(`/api/post`, {
  query: {
    filter: `{ "slug": { "_eq": "${slug.value}" } }`,
  },
  transform: ({ data }) => data[0] || null,
});

const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => ({ site_name: data.site_name }),
});

useHead({
  title: `${post.value.title} - ${settings.value.site_name}`,
});

finish();
</script>
