<template>
  <div className="p-2.5">
    <div
      className="flex xl:w-[1280px] lg:w-[900px] flex-row flex-wrap mt-14 p-6 backdrop-blur-md bg-[#ffffff20] rounded-xl gap-2 justify-between"
    >
      <ServiceSingle
        v-for="item in servicesData"
        :key="item.id"
        :icon="item.icon"
        :title="item.title"
        :subTitle="item.subTitle"
        class="first:[&_h3_span]:text-white first:[&_h3_span]:text-md last:[&_h3_span]:text-sm"
      >
        <Service1 class="[&_path]:fill-white" v-if="item.id === 1" />
        <Service2 class="[&_path]:fill-white" v-else-if="item.id === 2" />
        <Service3 class="[&_path]:fill-white" v-else-if="item.id === 3" />
        <Service4 class="[&_path]:fill-white" v-else-if="item.id === 4" />
        <Service5 class="[&_path]:fill-white" v-else-if="item.id === 5" />
      </ServiceSingle>
    </div>
  </div>
</template>

<script setup>
const servicesData = [
  { id: 1, title: "۱۸۲۰۰ پرونده", subTitle: "پذیرش شده" },
  {
    id: 2,
    title: "۴۲۱۰۰۰ جلسه درمانی",
    subTitle: "برگزار شده",
  },
  {
    id: 3,
    title: "اولین",
    subTitle: "مرکز توانبخشی کودکان",
  },
  { id: 4, title: "۹۹۴۳ بیمار", subTitle: "بهبود یافته" },
  {
    id: 5,
    title: "۲۰ سال",
    subTitle: "فعالیت علمی و رسانه ایی",
  },
];

import Service1 from "@/assets/icons/Service1";
import Service2 from "@/assets/icons/Service2";
import Service3 from "@/assets/icons/Service3";
import Service4 from "@/assets/icons/Service4";
import Service5 from "@/assets/icons/Service5";
import ServiceSingle from "@/components/Home/ServiceSingle.vue";
</script>
