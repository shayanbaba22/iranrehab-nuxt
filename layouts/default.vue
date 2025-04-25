<template>
  <NuxtLoadingIndicator color="#00aff0" size="10px" duration="4000" />
  <Header />
  <slot />
  <Footer />
</template>

<script setup>
const { data: settings } = await useFetch("/api/settings", {
  transform: ({ data }) => {
    return {
      site_name: data.site_name,
      site_description: data.site_description,
      favicon: data.favicon,
    };
  },
});

useHead({
  title: settings.value.site_name,
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
  meta: [{ name: "description", content: settings.value.site_description }],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: `${useRuntimeConfig().public.apiUrl}/assets/${
        settings.value.favicon
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
  font-display: swap;
}
@font-face {
  font-family: iransans;
  src: url(/fonts/IRANSansXFaNum-Bold.woff2) format("woff2");
  font-weight: bold;
  font-display: swap;
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

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 50px white inset;
}

input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 50px white inset;
}

div[data-testid="toast-content"] {
  font-size: 14px;
}

@media screen and (max-width: 640px) {
  div[data-testid="toast-content"] {
    font-size: 12px;
  }

  .Toastify__toast-theme--colored {
    width: 250px;
  }
}
</style>
