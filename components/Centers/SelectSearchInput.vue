<template>
  <form className="relative bg-[#ffffff] rounded-full mb-5">
    <div>
      <input
        className="sm:w-[180px] w-full h-[40px] pr-3 text-textpr focus:outline-none bg-transparent"
        type="text"
        name="search"
        autoComplete="off"
        v-model="searchCity"
        placeholder="جستجو..."
      />
    </div>
  </form>
</template>

<script setup>
const searchCity = ref("");
console.log(searchCity.value);
const emit = defineEmits(["update:searchQuery"]);

const setSearchInput = (value) => {
  emit("update:searchQuery", value.target._value);
  console.log(value.target._value);
};
</script>
