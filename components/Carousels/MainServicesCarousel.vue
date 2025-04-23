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
      v-for="service in MainServicesData"
      :key="service.id"
      class="flex justify-center items-center mb-14"
    >
      <MainServiceCard
        :key="service.id"
        :img="service.img"
        :title="service.title"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import service1 from "/servicesTwo/service1.webp";
import service2 from "/servicesTwo/service2.webp";
import service3 from "/servicesTwo/service3.webp";
import service4 from "/servicesTwo/service4.webp";
import service5 from "/servicesTwo/service5.webp";
import service6 from "/servicesTwo/service6.webp";
import service7 from "/servicesTwo/service7.webp";
import service8 from "/servicesTwo/service8.webp";
import MainServiceCard from "@/components/Cards/MainServiceCard.vue";

const MainServicesData = [
  { id: 1, img: service1, title: "کاردرمانی ذهنی" },
  { id: 2, img: service2, title: "گفتار درمانی" },
  { id: 3, img: service3, title: "بازی درمانی" },
  { id: 4, img: service4, title: "کاردرمانی جسمی" },
  { id: 5, img: service5, title: "فیزیوتراپی كودكان" },
  { id: 6, img: service6, title: "کاردرمانی درکی حرکتی" },
  { id: 7, img: service7, title: "کاردرمانی و گفتاردرمانی آنلاین" },
  { id: 8, img: service8, title: "کاردرمانی دست" },
];
</script>
