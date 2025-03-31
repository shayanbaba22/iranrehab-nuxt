<script setup>
const settings = await useAsyncData("settings", () =>
  $fetch(`${useRuntimeConfig().public.apiUrl}/items/settings`)
);
useHead({
  title: settings.data.value.data.site_name,
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
  meta: [
    { name: "description", content: settings.data.value.data.site_description },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: `${useRuntimeConfig().public.apiUrl}/assets/${
        settings.data.value.data.favicon
      }`,
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator name="global" color="#00aff0" size="4px" duration="4000" />
  <Header />
  <slot />
</template>

<style>
html {
  font-family: iransans;
}
</style>
