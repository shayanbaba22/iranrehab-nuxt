<template>
  <form
    @submit.prevent="handleSearch"
    class="relative order-3 bg-[#f7f7f7] rounded-full"
  >
    <div>
      <input
        class="sm:w-[180px] w-full h-[40px] pr-3 text-textpr focus:outline-none bg-transparent"
        type="text"
        name="search"
        autocomplete="off"
        placeholder="جستجو..."
        v-model="query"
      />
      <button
        type="submit"
        aria-label="search button"
        class="w-[40px] h-[40px] bg-[#3c959b] rounded-full absolute top-0 left-0 flex items-center justify-center cursor-pointer"
      >
        <SearchIcon />
      </button>
    </div>
  </form>
</template>

<script setup>
import SearchIcon from "@/assets/icons/SearchIcon.vue";
const router = useRouter(); 
const route = useRoute(); 
const query = ref("");
const searchParams = ref({ ...route.query }); 

const handleSearch = () => {
  searchParams.value.search = query.value;
  if (query.value === "") {
    delete searchParams.value.search;
  }
  router.push({ path: "/centers", query: searchParams.value }); 
};
</script>
