<template>
  <ul
    class="lg:order-2 lg:flex-row lg:items-center lg:justify-start lg:p-2.5 flex-col text-base gap-8 lg:gap-5 xl:gap-9 text-textsc hover:[&_li_a]:text-primary-1 [&_li_a]:transition-all [&_li_a]:delay-100 mr-4"
  >
    <li
      v-for="(item, index) in menu.data.value.data.menu_items"
      :key="index"
      class="flex flex-row items-center h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 relative"
      @click="toggleMenu"
    >
      <NuxtLink
        :class="[
          item.item_url === route.path
            ? `text-primary-1 lg:after:content-[''] lg:after:w-3 lg:after:h-[3px] after:bg-primary-1 after:rounded-full after:absolute after:left-0 after:right-0 after:mr-auto after:ml-auto after:bottom-[-20px]`
            : null,
        ]"
        :to="item.item_url"
      >
        {{ item.item_label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

const menu = await useFetch(
  `${useRuntimeConfig().public.apiUrl}/items/header_menu`
);

const toggleMenu = inject("toggleMenuProvider");
</script>
