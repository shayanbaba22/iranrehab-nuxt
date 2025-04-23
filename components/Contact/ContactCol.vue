<template>
  <div class="flex flex-col justify-start w-full lg:w-[calc(60%-10px)] gap-8">
    <div class="flex flex-row gap-5">
      <LocationContactIcon />
      <div class="flex flex-col text-sm text-textsc gap-3 w-[calc(80%-10px)]">
        آدرس
        <NuxtLink
          :to="settings.address[0].address_map_url"
          rel="nofollow noopener noreferrer"
          target="_blank"
          class="text-base font-bold text-textpr"
        >
          <span class="text-base font-bold text-primary-1"> شعبه مرکزی : </span>
          {{ settings.address[0].address_text }}
        </NuxtLink>
        <NuxtLink
          :to="settings.address[1].address_map_url"
          rel="nofollow noopener noreferrer"
          target="_blank"
          class="text-base font-bold text-textpr"
        >
          <span class="text-base font-bold text-primary-1">
            شعبه غرب تهران :
          </span>
          {{ settings.address[1].address_text }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row gap-5">
      <CallContactIcon />
      <div class="flex flex-col text-sm text-textsc gap-3 w-[calc(80%-10px)]">
        شماره های تماس
        <NuxtLink
          :to="`tel:${settings.phone_numbers[0].phone_number}`"
          rel="nofollow noopener noreferrer"
          target="_blank"
          class="text-base text-textpr font-bold"
        >
          {{ settings.phone_numbers[0].phone_number }}
        </NuxtLink>
        <NuxtLink
          :to="`tel:${settings.phone_numbers[1].phone_number}`"
          rel="nofollow noopener noreferrer"
          target="_blank"
          class="text-base text-textpr font-bold"
        >
          {{ settings.phone_numbers[1].phone_number }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-4 mt-4">
      <NuxtLink
        :to="settings.instagram"
        class="flex flex-col justify-center items-center w-16 h-10 border-[1px] border-[#ddd] hover:border-primary-1 rounded-lg [&_svg_path]:fill-primary-1 cursor-pointer transition duration-300"
        aria-label="اینستاگرام"
      >
        <Instagram />
      </NuxtLink>
      <NuxtLink
        :to="settings.telegram"
        class="flex flex-col justify-center items-center w-16 h-10 border-[1px] border-[#ddd] hover:border-primary-1 rounded-lg [&_svg_path]:fill-primary-1 cursor-pointer transition duration-300"
        aria-label="تلگرام"
      >
        <Telegram />
      </NuxtLink>
      <NuxtLink
        :to="settings.aparat"
        class="flex flex-col justify-center items-center w-16 h-10 border-[1px] border-[#ddd] hover:border-primary-1 rounded-lg [&_svg_path]:fill-primary-1 cursor-pointer transition duration-300"
        aria-label="آپارات"
      >
        <Aparat />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import LocationContactIcon from "@/assets/icons/LocationContactIcon.vue";
import CallContactIcon from "@/assets/icons/CallContactIcon.vue";
import Instagram from "@/assets/icons/Instagram.vue";
import Telegram from "@/assets/icons/Telegram.vue";
import Aparat from "@/assets/icons/Aparat.vue";

const { data: settings } = await useFetch(`/api/settings`, {
  transform: ({ data }) => {
    return {
      address: data.address,
      phone_numbers: data.phone_numbers,
      instagram: data.instagram,
      telegram: data.telegram,
      aparat: data.aparat,
    };
  },
});
</script>
