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
    :spaceBetween="20"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
    }"
    :modules="[Pagination, Autoplay]"
    class="flex flex-row w-full h-full mt-6 [&_*]:transition-all delay-150"
  >
    <SwiperSlide
      v-for="post in posts.data"
      :key="post.id"
      v-if="status == 'success'"
    >
      <BlogCard
        :key="post.id"
        :img="post.image"
        :title="post.title"
        :desc="post.contnet.slice(0, 300)"
        :date="new Date(post.date_created).toLocaleDateString('fa-IR', options)"
        :slug="`/blog/${post.slug}`"
        class="flex justify-center items-center mb-14"
      />
    </SwiperSlide>
    <Loading v-else-if="status == 'pending'" class="w-full" />
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BlogCard from "@/components/Cards/BlogCard.vue";
import Loading from "@/components/Loading.vue";

const { data: posts, status } = await useFetch(`/api/post?limit=6`, {
  lazy: true,
});

let options = { year: "numeric", month: "long", day: "numeric" };
</script>
