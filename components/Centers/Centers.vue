<template>
  <section
    class="flex flex-col items-center w-full z-50 mt-[-80px] p-2"
    id="centers"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col-reverse lg:flex-row justify-between gap-5 bg-white shadow-[0_6px_30px_10px_rgba(0,0,0,0.05)] rounded-3xl p-6 z-50 items-start"
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

        <Pagination
          :pages="pages"
          :totalPages="totalPages"
          :currentPage="currentPage"
          :handlePage="handlePage"
        />
      </div>
      <Loading v-else="status == 'pending'" />

      <p
        class="flex flex-col w-full lg:w-[calc(75%-10px)] gap-5 text-lg text-primary-1 justify-center items-center content-center mt-10"
        v-if="centers.data.length === 0"
      >
        موردی پیدا نشد
      </p>

      <div
        class="flex flex-col w-full lg:w-[calc(25%-10px)] border-2 border-dashed border-[#eeeeee] rounded-3xl gap-5 p-4"
      >
        <Search :centers="centers.data" />
        <SelectFilter :city="city" />
        <ResetFilters />
      </div>
    </div>
  </section>
</template>

<script setup>
import CenterCard from "@/components/Centers/CenterCard.vue";
import Loading from "@/components/Loading.vue";
import Pagination from "@/components/Pagination.vue";
import Search from "@/components/Header/Search.vue";
import SelectFilter from "@/components/Centers/SelectFilter.vue";
import ResetFilters from "@/components/Centers/ResetFilters.vue";

const params = useRoute();
const router = useRouter();
params.query.limit = 4;
const currentPage = ref(1);

const {
  data: centers,
  status,
  refresh,
} = await useFetch(`/api/center`, {
  lazy: true,
  query: params.query,
});

const { data: centersCount } = await useFetch(
  `/api/center?aggregate[count]=*`,
  {
    lazy: true,
    transform: ({ data }) => {
      return { count: data[0].count };
    },
  }
);

const { data: city } = await useFetch(`/api/city`, {
  lazy: true,
  transform: ({ data }) => {
    return data.map(({ id, city }) => ({ id, city }));
  },
});

const totalPages = Math.ceil(centersCount.value.count / params.query.limit);
const pages = computed(() => {
  const startPage = Math.max(1, currentPage.value - 1);
  const endPage = Math.min(currentPage.value + 1, totalPages);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

const handlePage = (p) => {
  currentPage.value = p;
  params.query.page = currentPage.value;
  refresh();
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 700);
};
</script>
