<template>
  <Swiper
    :breakpoints="{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }"
    :slidesPerView="1"
    :spaceBetween="0"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
    }"
    :modules="[Pagination, Autoplay]"
    className="flex flex-row w-full h-full mt-6 [&_*]:transition-all delay-150"
  >
    <SwiperSlide v-for="post in posts.data.value.data" :key="post.id">
      <BlogCard
        :img="post.image"
        :title="post.title"
        :desc="post.content.slice(0, 150)"
        :postDate="post.date_created"
        :slug="`/blog/${post.slug}`"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const posts = await useFetch(
  `${useRuntimeConfig().public.apiUrl}items/post?limit=8`
);
</script>
