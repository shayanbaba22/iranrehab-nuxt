<template>
  <Swiper
    :breakpoints="{
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 2,
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
    <SwiperSlide v-for="review in reviewsData" :key="review.id">
      <ReviewCard
        :key="review.id"
        :name="review.name"
        :position="review.position"
        :review="review.review"
        class="flex justify-center items-center mb-14"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import ReviewCard from "@/components/Cards/ReviewCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviewsData = [
  {
    id: 1,
    name: "سارا مظلومی",
    position: "مشکلات حرکتی",
    review:
      "پسرم که مشکلات حرکتی داشت، حالا توانسته به‌طور مستقل‌تر حرکت کند. مرکز جامع توانبخشی ایران با استفاده از تمرینات متناسب و پیگیری مستمر، خیلی به او کمک کرده‌اند.",
  },
  {
    id: 2,
    name: "علیرضا رنجبر",
    position: "کاردرمانی ذهنی",
    review:
      "کاردرمانی ذهنی در مرکز جامع توانبخشی ایران کمک زیادی به رشد و پیشرفت دخترم کرده. متخصصان بسیار حرفه‌ای هستند و تونستن راه‌های جدیدی برای حل مشکلات او پیدا کنند.",
  },
  {
    id: 3,
    name: "مینا معتمد",
    position: "گفتار درمانی",
    review:
      "گفتار درمانی در مرکز جامع توانبخشی ایران تاثیر زیادی در بهبود توانایی‌های کلامی پسرم داشت. پسرم قبلا در بیان کلمات مشکل داشت، حالا میتونه کمی بهتر صحبت کند.",
  },
];
</script>

<style></style>
