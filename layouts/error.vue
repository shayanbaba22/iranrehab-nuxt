<template>
  <NuxtLoadingIndicator color="#00aff0" size="10px" duration="4000" />
  <slot />
</template>

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
</style>
