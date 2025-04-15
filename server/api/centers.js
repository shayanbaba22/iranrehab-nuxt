import queryString from "query-string";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const stringified = queryString.stringify(query);
  const center = await $fetch(
    `${useRuntimeConfig().public.apiUrl}/items/center?${stringified}`
  );

  return center;
});
