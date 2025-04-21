<template>
  <nav
    aria-label="Page navigation"
    class="flex w-full justify-center mt-5"
    :class="[totalPages <= 1 ? 'hidden' : '']"
  >
    <ul class="inline-flex gap-3 text-sm">
      <li
        class="flex items-center justify-center w-[60px] h-[30px] leading-tight text-white bg-primary-1 rounded-lg hover:bg-primary-800 ease-in transition-all cursor-pointer"
        :class="[props.currentPage === 1 ? 'hidden' : '']"
        @click="handlePage(props.currentPage - 1)"
      >
        قبلی
      </li>
      <PagenationItem
        v-for="i in pages"
        :key="i"
        :page="i"
        :isActive="i === props.currentPage"
        @click="handlePage(i)"
      >
        {{ i }}
      </PagenationItem>
      <li
        class="flex items-center justify-center w-[60px] h-[30px] leading-tight text-white bg-primary-1 rounded-lg hover:bg-primary-800 ease-in transition-all cursor-pointer"
        :class="[props.currentPage === totalPages ? 'hidden' : '']"
        @click="
          () =>
            props.currentPage < totalPages && handlePage(props.currentPage + 1)
        "
      >
        بعدی
      </li>
    </ul>
  </nav>
</template>

<script setup>
import PagenationItem from "@/components/PaginationItem.vue";

const props = defineProps({
  limit: {
    type: Number,
    required: true,
  },
  dataCount: {
    type: Object,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const totalPages = computed(() => {
  return Math.ceil(props.dataCount.count / props.limit);
});

const pages = computed(() => {
  if (totalPages.value === 0) return [];
  const startPage = Math.max(1, props.currentPage - 1);
  const endPage = Math.min(props.currentPage + 1, totalPages.value);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

console.log(props.dataCount.count);

const emit = defineEmits(["update:currentPage"]);

const handlePage = (p) => {
  emit("update:currentPage", p);

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 700);
};
</script>
