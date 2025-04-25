<template>
  <section
    class="flex flex-col items-center justify-center p-2 lg:mt-[150px] mt-[80px]"
  >
    <div
      class="w-full xl:max-w-[1280px] flex flex-col lg:flex-row justify-between p-2.5 bg-[url('/FreeConsultation.svg')] bg-cover bg-center bg-no-repeat rounded-3xl"
    >
      <div
        class="lg:w-[calc(55%-20px)] flex flex-col gap-5 p-2.5 justify-center"
      >
        <p class="text-3xl text-white font-bold">دریافت مشاوره رایگان</p>

        <p class="text-sm text-white text-justify leading-8">
          برای دریافت مشاوره رایگان و پرسش و پاسخ سوالات شما ، میتوانید از طریق
          راه های ارتباطی با کارشناس های ما در ارتباط باشید
        </p>
        <div class="flex flex-col items-center lg:flex-row">
          <NuxtLink
            to="tel:02166430489"
            class="flex flex-col items-center text-white border-[1px] justify-center w-[180px] h-[44px] bg-transparent rounded-lg"
          >
            مشاوره رایگان
          </NuxtLink>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center lg:w-[calc(45%-20px)] mb-[-10px] lg:mt-[-60px] mt-10"
      >
        <NuxtImg
          alt="مشاوره رایگان"
          :src="moshavere"
          class="w-full"
          format="webp"
        ></NuxtImg>
      </div>
    </div>
  </section>
</template>

<script setup>
import moshavere from "/moshavere.webp";
</script>
