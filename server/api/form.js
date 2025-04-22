// server/api/fetchData.js (Nuxt 3)
export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Parse the body from the request

  try {
    // POST request to the external API
    const response = await $fetch(
      `${useRuntimeConfig().public.apiUrl}/items/contact_form`,
      {
        method: "POST",
        body, // Send the body from the request to the API
      }
    );

    // Check if the response exists and is successful
    if (!response) {
      throw new Error("Failed to submit form");
    }

    // Return the response data from the external API
    return response;
  } catch (error) {
    // Handle error and return a structured error response
    return {
      error: "Internal Server Error",
    };
  }
});
