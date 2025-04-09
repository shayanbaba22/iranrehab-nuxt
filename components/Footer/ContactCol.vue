<template>
  <div class="flex flex-col w-full lg:w-[calc(33%-10px)] gap-7">
    <div>
      <p class="text-lg font-bold text-white">اطلاعات تماس</p>
      <div class="w-[100px] h-[2px] bg-white rounded-full mt-3"></div>
    </div>
    <div class="flex flex-row gap-4">
      <LocationIcon />
      <NuxtLink
        :to="settings.address[0].address_map_url"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        <span class="text-base text-white font-bold">شعبه مرکزی : </span>
        {{ settings.address[0].address_text }}
      </NuxtLink>
    </div>

    <div class="flex flex-row gap-4 text-white align-center">
      <CallIcon />
      <NuxtLink
        :to="`tel:${settings.phone_numbers[0].phone_number}`"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        {{ settings.phone_numbers[0].phone_number }}
      </NuxtLink>
      -
      <NuxtLink
        :to="`tel:${settings.phone_numbers[1].phone_number}`"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        {{ settings.phone_numbers[1].phone_number }}
      </NuxtLink>
    </div>

    <div class="flex flex-row gap-4">
      <LocationIcon />
      <NuxtLink
        :to="settings.address[1].address_map_url"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        <span class="text-base text-white font-bold"> شعبه غرب تهران : </span>
        {{ settings.address[1].address_text }}
      </NuxtLink>
    </div>

    <div class="flex flex-row gap-4 text-white align-center">
      <CallIcon />
      <NuxtLink
        :to="`tel:${settings.phone_numbers[2].phone_number}`"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        {{ settings.phone_numbers[2].phone_number }}
      </NuxtLink>
      -
      <NuxtLink
        :to="`tel:${settings.phone_numbers[3].phone_number}`"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="text-sm text-white"
      >
        {{ settings.phone_numbers[3].phone_number }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import CallIcon from "@/assets/icons/CallIcon.vue";

const { data: settings } = await useFetch(`/api/settings`, {
  transform: ({ data }) => {
    return {
      address: data.address,
      phone_numbers: data.phone_numbers,
    };
  },
});
</script>
