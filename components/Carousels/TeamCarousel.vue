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
    :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
    }"
    :navigation="{
      nextEl: '.next',
      prevEl: '.prev',
    }"
    :modules="[Autoplay, Navigation]"
    class="flex flex-row w-full h-full mt-6 [&_*]:transition-all delay-150"
  >
    <CarouselArrows
      class="cursor-pointer [&_path]:stroke-[#00AFF0] p-2 bg-white w-[44px] h-[44px] rounded-full border-2 border-primary-500 absolute top-0 bottom-0 m-auto z-10 right-0 next"
    />
    <CarouselArrows
      class="cursor-pointer [&_path]:stroke-[#00AFF0] rotate-180 p-2 bg-white w-[44px] h-[44px] rounded-full border-2 border-primary-500 absolute top-0 bottom-0 m-auto z-10 left-0 prev"
    />
    <SwiperSlide v-for="emp in teamData" :key="emp.id">
      <TeamCard
        :key="emp.id"
        :img="emp.img"
        :name="emp.name"
        :position="emp.position"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import CarouselArrows from "@/assets/icons/CarouselArrows.vue";
import TeamCard from "@/components/Cards/TeamCard.vue";
import farhang from "/team/farhang.webp";
import ghorbani from "/team/ghorbani.webp";
import mirtalaei from "/team/mirtalaei.webp";
import rahimi from "/team/rahimi.webp";

const teamData = [
  {
    id: 1,
    img: farhang,
    name: "فرهنگ محمدخانی",
    position: "گفتار درمانی کودکان",
  },
  { id: 2, img: ghorbani, name: "الناز قربانی", position: "گفتار درمانی" },
  {
    id: 3,
    img: mirtalaei,
    name: "سید علیرضا میرطلایی",
    position: "کاردرمانی دست",
  },
  { id: 4, img: rahimi, name: "فاطمه رحیمی", position: "کاردرمانگر" },
  {
    id: 5,
    img: farhang,
    name: "فرهنگ محمدخانی",
    position: "گفتار درمانی کودکان",
  },
  { id: 6, img: ghorbani, name: "الناز قربانی", position: "گفتار درمانی" },
];
</script>
