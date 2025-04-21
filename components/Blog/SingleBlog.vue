<template>
  <div class="flex flex-col items-center w-full mt-10 p-2.5">
    <div
      class="w-full xl:max-w-[1280px] flex flex-col lg:flex-row justify-between gap-5 bg-white"
    >
      <div
        class="flex flex-col w-full lg:w-[calc(70%-10px)] gap-5"
        v-if="props.status == 'success'"
      >
        <SingleBlogTitle
          :title="post.title"
          :img="post.image"
          :date="
            new Date(post.date_created).toLocaleDateString('fa-IR', options)
          "
        />
        <div
          class="text-sm leading-7 text-textpr content [&_h2]:text-[28px] [&_h3]:text-[26px] [&_h4]:text-[22px] [&_h5]:text-[20px] [&_h6]:text-[18px]"
          v-html="props.post.contnet"
        ></div>
      </div>
      <Loading v-else-if="props.status == 'pending'" />
      <div class="flex flex-col w-full lg:w-[calc(30%-10px)] relative">
        <div class="flex flex-col w-full gap-4 sticky top-20">
          <div>
            <p class="text-lg font-bold text-textpr">آخرین مقالات</p>
          </div>
          <NuxtLink
            v-for="post in posts.data"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="text-sm text-textpr bg-[#f2f2f2] p-6 rounded-xl"
          >
            {{ post.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleBlogTitle from "@/components/Blog/SingleBlogTitle.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const { data: posts } = await useFetch(`/api/post`, {
  query: {
    limit: 4,
  },
});

let options = { year: "numeric", month: "long", day: "numeric" };
</script>
