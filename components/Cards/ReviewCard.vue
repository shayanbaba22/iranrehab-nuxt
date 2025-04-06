<template>
  <div
    class="flex flex-col justify-center items-center border-4 border-primary-200 p-8 rounded-3xl shadow-md"
  >
    <div
      class="flex flex-row justify-items-start items-center w-full mb-6 gap-4"
    >
      <AvatarIcon />
      <div>
        <p class="text-textpr text-base w-full font-semibold">{{ name }}</p>
        <p class="text-[#707070] text-[13px] mt-2">{{ position }}</p>
      </div>
      <QouteIcon class="absolute left-4" />
    </div>
    <p class="text-textpr text-sm p-4 bg-[#F4F4F4] rounded-2xl leading-7">
      {{ review }}
    </p>
  </div>
</template>

<script setup>
import AvatarIcon from "@/assets/icons/AvatarIcon.vue";
import QouteIcon from "@/assets/icons/QouteIcon.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});
</script>
