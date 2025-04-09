<template>
  <nav aria-label="Breadcrumb" class="flex flex-row z-10">
    <ol class="flex flex-row gap-2">
      <BreadcrumbItem
        :key="item.id"
        :title="item.title"
        :href="item.href"
        v-for="item in breadcrumbArray"
      />
    </ol>
  </nav>
</template>

<script setup>
import BreadcrumbItem from "@/components/Header/BreadcrumbItem.vue";
defineProps({
  breadcrumbArray: {
    type: Array,
    required: true,
  },
});
</script>
