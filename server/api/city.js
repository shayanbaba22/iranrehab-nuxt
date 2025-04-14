import queryString from "query-string";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const stringified = queryString.stringify(query);
  const city = await $fetch(
    `${useRuntimeConfig().public.apiUrl}/items/city_list?sort[]=-status&limit=1160&${stringified}`
  );

  return city;
});
