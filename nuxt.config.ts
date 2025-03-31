// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/image", "@nuxt/fonts"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  app: {
    head: {
      title: "Nuxt", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  fonts: {
    families: [
      {
        name: "iransans",
        src: "/fonts/IRANSansXFaNum-Regular.woff2",
        weight: "normal",
      },
      {
        name: "iransans",
        src: "/fonts/IRANSansXFaNum-Bold.woff2",
        weight: "bold",
      },
    ],
  },
});
