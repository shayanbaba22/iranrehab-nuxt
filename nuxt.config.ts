// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/image",
    "@formkit/nuxt",
  ],
  runtimeConfig: {
    public: {
      apiUrl: "https://iranrehab-panel.liara.run",
    },
  },
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.js",
  },
  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
  },
});
