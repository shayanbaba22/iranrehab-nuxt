export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;
  const center = await $fetch(
    `${
      useRuntimeConfig().public.apiUrl
    }/items/center?filter={ "slug": { "_eq": "${slug}" }}`
  );

  return center;
});
