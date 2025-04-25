<template>
  <div
    class="flex flex-col justify-center items-center lg:flex-row lg:justify-start gap-5"
  >
    <NuxtImg
      :src="`${useRuntimeConfig().public.apiUrl}/assets/${
        props.img
      }?quality=80&format=webp&width=320`"
      class="rounded-3xl w-80 h-[200px] object-cover"
      :alt="props.title"
      :width="320"
      format="webp"
    ></NuxtImg>
    <div
      class="flex flex-col gap-4 justify-center items-center lg:items-start [&_a.last-pages]:text-textsc [&_span.seperator]:text-textsc [&_p.current-page]:text-textpr"
    >
      <h1 class="text-lg font-bold text-primary-1">{{ props.title }}</h1>
      <p class="text-xs text-textsc flex felx-row gap-2 items-center">
        {{ props.date }}
      </p>
      <Breadcrumb :breadcrumbArray="breadcrumbArray" />
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Header/Breadcrumb.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const breadcrumbArray = computed(() => [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "بلاگ", href: "/blog" },
  { id: 3, title: props.title || "در حال بارگذاری", href: null },
]);
</script>
