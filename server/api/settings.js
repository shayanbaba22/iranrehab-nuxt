export default defineEventHandler(async (event) => {
  const settings = await $fetch(
    `${useRuntimeConfig().public.apiUrl}/items/settings`
  );

  return settings;
});
