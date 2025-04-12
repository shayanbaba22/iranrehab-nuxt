<template>
  <nav
    aria-label="Page navigation"
    class="flex w-full justify-center mt-5"
    :class="[props.totalPages <= 1 ? 'hidden' : '']"
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
        v-for="i in props.pages"
        :key="i"
        :page="i"
        :isActive="i === props.currentPage"
        @click="props.handlePage(i)"
      >
        {{ i }}
      </PagenationItem>
      <li
        class="flex items-center justify-center w-[60px] h-[30px] leading-tight text-white bg-primary-1 rounded-lg hover:bg-primary-800 ease-in transition-all cursor-pointer"
        :class="[props.currentPage === props.totalPages ? 'hidden' : '']"
        @click="
          () =>
            props.currentPage < props.totalPages &&
            props.handlePage(props.currentPage + 1)
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
  pages: {
    type: Array,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  handlePage: {
    type: Function,
    required: true,
  },
});
</script>
