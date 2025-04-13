<template>
  <div
    class="w-full p-4 bg-[#f7f7f7] order-4 rounded-2xl relative text-sm border-[1px] border-[#e8e8e8] selectToggle cursor-pointer"
    @click="toggleSelect"
  >
    {{ cityName }}
    <SelectDropdown
      :open="open"
      @update:cityName="
        (value) => {
          cityName = value;
        }
      "
    />
    <CarouselArrows
      class="absolute left-3 top-[18px] w-4 h-4 transition-all duration-500"
      :class="[open ? '-rotate-90' : 'rotate-90']"
    />
  </div>
</template>

<script setup>
import SelectDropdown from "@/components/Centers/SelectDropdown.vue";
import CarouselArrows from "@/assets/icons/CarouselArrows.vue";

const cityName = ref("انتخاب کنید");
const open = ref(false);

const toggleSelect = () => {
  open.value = !open.value;
};
</script>
