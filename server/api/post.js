import queryString from "query-string";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const stringified = queryString.stringify(query);
  const posts = await $fetch(
    `${useRuntimeConfig().public.apiUrl}/items/post?${stringified}`
  );

  return posts;
});
