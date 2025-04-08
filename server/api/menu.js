export default defineEventHandler(async (event) => {
  const menu = await $fetch(
    `${useRuntimeConfig().public.apiUrl}/items/header_menu`
  );

  return menu;
});
