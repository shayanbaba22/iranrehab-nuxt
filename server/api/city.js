export default defineEventHandler(async (event) => {
  const posts = await $fetch(
    `${
      useRuntimeConfig().public.apiUrl
    }/items/city_list?limit=1160&sort[]=-status`
  );

  return posts;
});
