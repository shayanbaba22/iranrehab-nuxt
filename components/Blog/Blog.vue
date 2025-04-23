<template>
  <section class="flex flex-col items-center w-full z-10 mt-[-80px] p-2">
    <div
      class="w-full xl:max-w-[1280px] flex flex-row lg:flex-row justify-start gap-1 flex-wrap bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-10 items-start"
    >
      <div
        class="w-full flex flex-row lg:flex-row justify-start gap-1 flex-wrap"
        v-if="status == 'success'"
      >
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :img="post.image"
          :title="post.title"
          :desc="post.contnet.slice(0, 300)"
          :date="
            new Date(post.date_created).toLocaleDateString('fa-IR', options)
          "
          :slug="`/blog/${post.slug}`"
          class="flex justify-center items-center w-full lg:w-[calc(25%-3px)]"
        />
        <Pagination
          :limit="limit"
          :dataCount="postsCount"
          :currentPage="currentPage"
          @update:currentPage="handlePage"
        />
      </div>
      <Loading v-else="status == 'pending'" class="w-full" />
    </div>
  </section>
</template>

<script setup>
import BlogCard from "@/components/Cards/BlogCard.vue";

const limit = ref(4);
const currentPage = ref(1);
let options = { year: "numeric", month: "long", day: "numeric" };

const { data: posts, status } = await useFetch(`/api/post`, {
  lazy: true,
  query: computed(() => {
    const query = {};
    query.page = currentPage.value;
    query.limit = limit.value;
    return query;
  }),
  watch: [limit, currentPage],
  transform: ({ data }) => data,
});

const { data: postsCount } = await useFetch(`/api/post?aggregate[count]=*`, {
  lazy: true,
  query: computed(() => {
    const query = {};
    query.limit = limit.value;
    return query;
  }),
  watch: [limit, currentPage],
  transform: ({ data }) => {
    return { count: data[0].count };
  },
});

const handlePage = (page) => {
  currentPage.value = page;
};
</script>
