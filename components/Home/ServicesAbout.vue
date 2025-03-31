<template>
  <div className="p-2.5 lg:p-0">
    <div
      className="flex w-full flex-row flex-wrap p-2 bg-white border-2 border-primary-400 rounded-2xl gap-2 justify-between"
    >
      <ServiceSingle
        v-for="item in servicesData"
        :key="item.id"
        :icon="item.icon"
        :title="item.title"
        :subTitle="item.subTitle"
        class="first:[&_h3_span]:text-textpr first:[&_h3_span]:text-[12px] last:[&_h3_span]:text-[11px]"
      >
        <Service1 class="[&_path]:fill-[#00AFF0]" v-if="item.id === 1" />
        <Service2 class="[&_path]:fill-[#00AFF0]" v-else-if="item.id === 2" />
        <Service3 class="[&_path]:stroke-[#00AFF0]" v-else-if="item.id === 3" />
        <Service4 class="[&_path]:fill-[#00AFF0]" v-else-if="item.id === 4" />
        <Service5 class="[&_path]:fill-[#00AFF0]" v-else-if="item.id === 5" />
      </ServiceSingle>
    </div>
  </div>
</template>

<script setup>
const servicesData = [
  {
    id: 1,
    title: "۱۸۲۰۰ پرونده",
    subTitle: "پذیرش شده",
  },
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
  {
    id: 4,
    title: "۹۹۴۳ بیمار",
    subTitle: "بهبود یافته",
  },
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
