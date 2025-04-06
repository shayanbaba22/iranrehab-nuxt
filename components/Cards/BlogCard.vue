<template>
  <div class="p-2.5">
    <div
      class="flex flex-col justify-center items-center p-2.5 gap-5 shadow-[0_6px_26px_4px_rgba(0,0,0,0.06)] rounded-[40px]"
    >
      <div class="w-full h-[180px]">
        <NuxtLink :to="slug">
          <NuxtImg
            :src="`${
              useRuntimeConfig().public.apiUrl
            }/assets/${img}?quality=100`"
            class="rounded-[40px] w-[270px] h-[200px]"
            :alt="title"
          ></NuxtImg>
        </NuxtLink>
      </div>
      <div
        class="flex flex-col gap-2 flex-grow rounded-3xl bg-[#f4f4f4] p-2.5 pt-5 w-[100%]"
      >
        <NuxtLink :to="slug">
          <h3 class="text-base text-textpr font-bold h-6 line-clamp">
            {{ title }}
          </h3>
        </NuxtLink>
        <p class="text-xs text-textsc">{{ date }}</p>
        <div
          class="text-sm text-textsc text-justify leading-6 line-clamp-p"
          v-html="desc"
        ></div>
        <NuxtLink
          :to="slug"
          class="flex flex-row items-center relative [&_svg]:hover:translate-x-[-12px] [&_svg]:hover:delay-250"
        >
          <div class="text-primary-1 text-base">مشاهده بیشتر</div>
          <div class="transition-all duration-500 h-[44px]">
            <ArrowLeftBtn class="translate-y-0 translate-x-[6px]" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
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
  slug: {
    type: String,
    required: true,
  },
});

import ArrowLeftBtn from "@/assets/icons/ArrowLeftBtn.vue";
</script>
