// server/api/fetchData.js (Nuxt 3)
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await $fetch(
      `${useRuntimeConfig().public.apiUrl}/items/contact_form`,
      {
        method: "POST",
        body,
      }
    );

    if (!response) {
      throw new Error("Failed to submit form");
    }

    return response;
  } catch (error) {
    return {
      error: "Internal Server Error",
    };
  }
});
