<template>
  <NuxtLoadingIndicator color="#00aff0" size="10px" duration="4000" />
  <Header />
  <slot />
  <Footer />
</template>

<script setup>
const { data: settings } = await useFetch("/api/settings");
useHead({
  title: settings.data.site_name,
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
  meta: [{ name: "description", content: settings.data.site_description }],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: `${useRuntimeConfig().public.apiUrl}/assets/${
        settings.data.favicon
      }`,
    },
  ],
});
</script>

<style>
@font-face {
  font-family: iransans;
  src: url(/fonts/IRANSansXFaNum-Regular.woff2) format("woff2");
  font-weight: normal;
}
@font-face {
  font-family: iransans;
  src: url(/fonts/IRANSansXFaNum-Bold.woff2) format("woff2");
  font-weight: bold;
}

* {
  font-family: iransans;
}

.font-bold {
  font-weight: 700 !important; /* Ensure bold weight is applied */
}

.font-normal {
  font-weight: 400 !important; /* Ensure normal weight is applied */
}

.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  font-weight: bold;
  color: rgba(0, 175, 240, 1);
  margin: 20px 0px;
}

.swiper-pagination {
  bottom: 20px !important;
}

.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
}
.swiper-pagination-bullet-active {
  width: 36px !important;
  border-radius: 500px !important;
}
.swiper-slide img,
.blog-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 30px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 8px 8px;
  animation: l7 1s infinite;
}

.loaderTwo {
  width: 20px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 5px 5px;
  animation: l7 1s infinite;
}

@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 50px white inset;
}

input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 50px white inset;
}
</style>
