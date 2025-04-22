<template>
  <PageTitle title="تماس با ما" :breadcrumbArray="breadcrumbArray" />
  <Contact />
</template>

<script setup>
import PageTitle from "@/components/Header/PageTitle.vue";
import Contact from "@/components/Contact/Contact.vue";

const { start, finish } = useLoadingIndicator();
start({ force: true });

const breadcrumbArray = computed(() => [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "تماس با ما", href: null },
]);

finish();
</script>
