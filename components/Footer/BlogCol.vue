<template>
  <div class="flex flex-col w-full lg:w-[calc(33%-10px)] gap-7">
    <div>
      <p class="text-lg font-bold text-white">آخرین مقالات</p>
      <div class="w-[100px] h-[2px] bg-white rounded-full mt-3"></div>
    </div>

    <NuxtLink
      :key="post.id"
      :to="`/blog/${post.slug}`"
      class="text-sm text-white"
      v-for="post in posts.data"
    >
      {{ post.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(`/api/post?limit=4`);
</script>
