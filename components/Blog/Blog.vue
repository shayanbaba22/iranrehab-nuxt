<template>
  <section class="flex flex-col items-center w-full z-50 mt-[-80px] p-2">
    <div
      class="w-full xl:max-w-[1280px] flex flex-row lg:flex-row justify-start gap-1 flex-wrap bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-50 items-start"
    >
      <BlogCard
        v-for="post in posts"
        v-if="status == 'success'"
        :key="post.id"
        :img="post.image"
        :title="post.title"
        :desc="post.contnet.slice(0, 300)"
        :date="new Date(post.date_created).toLocaleDateString('fa-IR', options)"
        :slug="`/blog/${post.slug}`"
        class="flex justify-center items-center w-full lg:w-[calc(25%-3px)]"
      />
      <Loading v-else="status == 'pending'" class="w-full" />
      <Pagination
        :pages="pages"
        :totalPages="totalPages"
        :currentPage="currentPage"
        :handlePage="handlePage"
      />
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
    query.page = currentPage.value;
    query.limit = limit.value;
    return query;
  }),
  watch: [limit, currentPage],
  transform: ({ data }) => {
    return { count: data[0].count };
  },
});

const totalPages = computed(() => {
  if (!postsCount.value || !postsCount.value.count) return 0;
  return Math.ceil(postsCount.value.count / limit.value);
});

const pages = computed(() => {
  if (totalPages.value === 0) return [];
  const startPage = Math.max(1, currentPage.value - 1);
  const endPage = Math.min(currentPage.value + 1, totalPages.value);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

const handlePage = (p) => {
  currentPage.value = p;

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 700);
};
</script>
