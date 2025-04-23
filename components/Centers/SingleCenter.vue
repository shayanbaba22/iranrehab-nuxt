<template>
  <section class="flex flex-col items-center w-full z-10 mt-[-80px] p-2">
    <div
      class="w-full xl:max-w-[1280px] bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-10 items-start"
    >
      <div
        class="flex flex-col lg:flex-row flex-wrap justify-between gap-5"
        v-if="props.status == 'success'"
      >
        <div
          class="w-full bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-lg font-bold mb-2 text-primary-1">توضیحات:</p>
          <p
            class="text-sm leading-7"
            v-html="props.center.short_description"
          ></p>
        </div>
        <div
          class="w-full lg:w-[calc(50%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              نام مدیر:
            </span>
            {{ props.center.manager_name }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(50%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              عنوان مجوز:
            </span>
            {{ props.center.lisence }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(50%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1"> خدمات: </span>
            {{ servicesTexts }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(50%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              زمینه فعالیت:
            </span>
            {{ activityTexts }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(33%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              نوع مالکیت:
            </span>
            {{ props.center.ownership }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(33%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1"> شهر: </span>
            {{ props.city.city }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(33%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              تلفن مرکز:
            </span>
            {{ props.center.phone }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(35%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1">
              تلفن همراه:
            </span>
            {{ props.center.phone }}
          </p>
        </div>
        <div
          class="w-full lg:w-[calc(65%-10px)] bg-[#f5f5f5] border-[1px] border-[#eeeeee] rounded-2xl p-4"
        >
          <p class="text-sm">
            <span class="text-lg font-bold ml-3 text-primary-1"> آدرس: </span>
            {{ props.center.address }}
          </p>
        </div>
      </div>
      <Loading v-else="props.status == 'pending'" class="w-full" />
    </div>
  </section>
</template>

<script setup>
import Loading from "@/components/Loading.vue";

const props = defineProps({
  center: {
    type: Object,
    required: true,
  },
  city: {
    type: Object,
    required: true,
  },
  status: {
    type: Object,
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

const activityTexts = computed(() => {
  if (props.center.services.length === 0) {
    return "موردی انتخاب نشده است";
  } else {
    const activitys = ref(props.center.activity);
    if (activitys.value.length == 1) {
      return activitys.value[0];
    } else {
      return (
        activitys.value.slice(0, -1).join(" , ") +
        " , " +
        activitys.value.slice(-1)
      );
    }
  }
});
</script>
