<template>
  <NuxtLink :to="`/centers/${center.slug}`">
    <div
      class="flex flex-col p-4 bg-[#f5f5f5] border-2 border-[#eeeeee] rounded-3xl"
    >
      <div class="flex flex-row flex-wrap items-center justify-between gap-5">
        <h2
          class="font-bold text-primary-1 text-lg mt-3 lg:mt-0 lg:text-base w-[calc(100%-10px)] lg:w-[calc(25%-20px)] text-center lg:text-right"
        >
          {{ center.title }}
        </h2>
        <CenterDetails
          title="شهر"
          :subTitle="selectedCity.city || 'نامشخص'"
          v-if="status == 'success'"
        />
        <CenterDetails
          title="شهر"
          :subTitle="'درحال بارگذاری'"
          v-else="status == 'pending'"
        />

        <CenterDetails title="نام مدیر" :subTitle="center.manager_name" />
        <CenterDetails title="عنوان مجوز" :subTitle="center.lisence" />
      </div>
      <div
        class="flex flex-row border-t-[1px] border-[#e7e7e7] p-3 text-sm mt-6"
      >
        <span class="font-bold ml-2">خدمات: </span>
        <p>
          {{ servicesTexts }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import CenterDetails from "@/components/Centers/CenterDetails.vue";

const props = defineProps({
  center: {
    type: Object,
    required: true,
  },
  city: {
    type: Array,
    required: true,
  },
});

const servicesTexts = computed(() => {
  if (props.center.services.length === 0) {
    return "موردی انتخاب نشده است";
  } else {
    const services = ref(props.center.services);
    if (services.value.length == 1) {
      return services.value[0];
    } else {
      return (
        services.value.slice(0, -1).join(" , ") +
        " , " +
        services.value.slice(-1)
      );
    }
  }
});

const { data: selectedCity, status } = await useFetch(`/api/city`, {
  lazy: true,
  query: { filter: `{ "id" : { "_eq": "${props.center.selected_city}" } }` },
  transform: ({ data }) => {
    return { city: data[0].city };
  },
});
</script>
