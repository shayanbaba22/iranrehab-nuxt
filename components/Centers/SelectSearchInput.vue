<template>
  <div>
    <input
      class="w-full h-[40px] pr-3 text-textpr focus:outline-none relative bg-[#ffffff] rounded-full mb-5"
      type="text"
      name="search"
      autoComplete="off"
      placeholder="جستجوی شهر..."
      @input="handleSearch"
    />
  </div>
</template>

<script setup>
const citySearchInput = inject("citySearchInput", ref(""));

const handleSearch = (e) => {
  citySearchInput.value = e.target.value;
};
</script>
