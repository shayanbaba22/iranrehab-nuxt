<template>
  <nav
    aria-label="Page navigation"
    class="flex w-full justify-center mt-5"
    :class="[totalPages <= 1 ? 'hidden' : '']"
  >
    <ul class="inline-flex gap-3 text-sm">
      <li
        class="flex items-center justify-center w-[60px] h-[30px] leading-tight text-white bg-primary-1 rounded-lg hover:bg-primary-800 ease-in transition-all cursor-pointer"
        :class="[page === 1 ? 'hidden' : '']"
        @click="handlePage(page - 1)"
      >
        قبلی
      </li>
      <PagenationItem
        v-for="i in pages"
        :key="i"
        :page="i"
        :isActive="i === page"
        @click="handlePage(i)"
      >
        {{ i }}
      </PagenationItem>
      <li
        class="flex items-center justify-center w-[60px] h-[30px] leading-tight text-white bg-primary-1 rounded-lg hover:bg-primary-800 ease-in transition-all cursor-pointer"
        :class="[page === totalPages ? 'hidden' : '']"
        @click="() => page < totalPages && handlePage(page + 1)"
      >
        بعدی
      </li>
    </ul>
  </nav>
</template>

<script setup>
import PagenationItem from "@/components/PaginationItem.vue";

const props = defineProps({
  urlName: {
    type: String,
    required: true,
  },
  dataCount: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const route = useRoute().query;
console.log(route);
const totalPages = Math.ceil(props.dataCount.count / route.limit);
const page = ref(1);
const pages = computed(() => {
  const startPage = Math.max(1, page.value - 1);
  const endPage = Math.min(page.value + 1, totalPages);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

const handlePage = (p) => {
  page.value = p;

  router.push({
    path: props.urlName,
    query: { ...route.query, page: p },
  });
};
</script>
