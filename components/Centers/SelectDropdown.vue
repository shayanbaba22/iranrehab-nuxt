<template>
  <Transition name="bounce">
    <div
      class="absolute top-[60px] right-0 left-0 m-auto bg-[#f7f7f7] border-[1px] border-[#e8e8e8] rounded-2xl shadow-xl w-[250px] h-[300px] overflow-y-scroll p-4 z-50"
      v-if="open"
    >
      <SelectSearchInput />
      <ul v-if="cityStatus == 'success'">
        <li
          v-for="c in city"
          :key="c.id"
          :id="c.id"
          :value="c.city"
          class="text-sm mb-4 cursor-pointer"
          @click="handleSelect"
        >
          {{ c.city }}
        </li>
      </ul>
      <Loading v-else="cityStatus == 'pending'" class="w-full" />
    </div>
  </Transition>
</template>

<script setup>
import SelectSearchInput from "@/components/Centers/SelectSearchInput.vue";
import Loading from "@/components/Loading.vue";
const city = inject("city", []);
const cityFilter = inject("cityFilter");
const citySearchInput = inject("citySearchInput");
const cityStatus = inject("cityStatus", ref(""));

const props = defineProps({
  open: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:cityName"]);

const handleSelect = (value) => {
  citySearchInput.value = "";
  cityFilter.value = value.target.id;
  emit("update:cityName", value.target._value);
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
