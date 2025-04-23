<template>
  <section
    class="flex flex-col items-center w-full z-10 mt-[-80px] p-2"
    id="centers"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col-reverse lg:flex-row justify-between gap-5 bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-10 items-start"
    >
      <div
        class="flex flex-col w-full lg:w-[calc(75%-10px)] gap-5 justify-center"
        v-if="status == 'success'"
      >
        <CenterCard
          v-for="center in centers.data"
          :key="center.id"
          :center="center"
          :city="city"
        />

        <p
          class="flex flex-col w-full lg:w-full gap-5 text-lg text-primary-1 justify-center items-center content-center mt-10"
          v-if="centers.data.length === 0"
        >
          موردی پیدا نشد
        </p>

        <Pagination
          v-if="centersCount.count > limit"
          :limit="limit"
          :dataCount="centersCount"
          :currentPage="currentPage"
          @update:currentPage="handlePage"
        />
      </div>
      <Loading
        v-else="status == 'pending'"
        class="w-full lg:w-[calc(75%-10px)]"
      />

      <div
        class="flex flex-col w-full lg:w-[calc(25%-10px)] border-2 border-dashed border-[#eeeeee] rounded-3xl gap-5 p-4"
      >
        <Search
          @update:searchQuery="
            (value) => {
              searchQuery = value;
              currentPage = 1;
            }
          "
        />
        <SelectFilter />
        <Transition name="bounce">
          <ResetFilters
            v-if="searchQuery !== '' || cityFilter"
            @click="handleReset"
          />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import CenterCard from "@/components/Cards/CenterCard.vue";
import Loading from "@/components/Loading.vue";
import Pagination from "@/components/Pagination.vue";
import Search from "~/components/Centers/Search.vue";
import SelectFilter from "@/components/Centers/SelectFilter.vue";
import ResetFilters from "@/components/Buttons/ResetFilters.vue";

const limit = ref(4);
const currentPage = ref(1);
const searchQuery = ref("");
const cityFilter = ref("");
const citySearchInput = ref("");
const containOrEqual = ref(false);
const cityFilterQuery = computed(() => {
  if (containOrEqual) {
    return `{ "city" : { "_contains": "${citySearchInput.value}" } }`;
  } else {
    return `{ "city" : { "_eq": "" } }`;
  }
});

const handleReset = () => {
  searchQuery.value = "";
  cityFilter.value = "";
  containOrEqual.value = false;
};

provide("cityFilter", cityFilter);

const { data: centers, status } = await useFetch(`/api/centers`, {
  lazy: true,
  query: computed(() => {
    const query = {};
    if (searchQuery.value) {
      query.limit = limit.value;
      query.page = currentPage.value;
      query.search = searchQuery.value;
      if (cityFilter.value) {
        query.filter = `{ "selected_city" : { "_eq": "${cityFilter.value}" } }`;
      }
      return query;
    } else {
      query.page = currentPage.value;
      query.limit = limit.value;
      if (cityFilter.value) {
        query.filter = `{ "selected_city" : { "_eq": "${cityFilter.value}" } }`;
      }
      return query;
    }
  }),
  watch: [limit, currentPage, searchQuery, cityFilter],
});

const { data: centersCount } = await useFetch(
  `/api/centers?aggregate[count]=*`,
  {
    lazy: true,
    query: computed(() => {
      const query = {};
      query.search = searchQuery.value;
      query.limit = limit.value;
      if (cityFilter.value) {
        query.filter = `{ "selected_city" : { "_eq": "${cityFilter.value}" } }`;
      }
      return query;
    }),
    watch: [limit, currentPage, searchQuery, cityFilter],
    transform: ({ data }) => {
      return { count: data[0].count };
    },
  }
);

const { data: city, status: cityStatus } = await useFetch(`/api/city`, {
  lazy: true,
  query: computed(() => {
    const query = {};
    if (citySearchInput.value !== "") {
      query.filter = cityFilterQuery.value;
      return query;
    }
  }),
  transform: ({ data }) => {
    return data.map(({ id, city }) => ({ id, city }));
  },
  watch: [cityFilterQuery],
});

provide("citySearchInput", citySearchInput);
provide("cityStatus", cityStatus);
provide("city", city);

const handlePage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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
