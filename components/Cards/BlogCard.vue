<template>
    <div class="p-2.5">
      <div class="flex flex-col justify-center items-center p-2.5 gap-5 shadow-[0_6px_26px_4px_rgba(0,0,0,0.06)] rounded-[40px]">
        <div class="w-full h-[180px]">
          <Link :href="slug">
            <NuxtImg
              :src="`${process.env.NEXT_PUBLIC_API_URL}/assets/${img}?quality=100&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`"
              width={270}
              height={200}
              class="rounded-[40px]"
              lazy
              alt={title}
            ></NuxtImg>
          </Link>
        </div>
        <div class=" flex flex-col gap-2 flex-grow rounded-3xl bg-[#f4f4f4] p-2.5 pt-5 w-[100%]">
          <Link href={slug}>
            <h3 class="text-base text-textpr font-bold h-6 line-clamp">
              {title}
            </h3>
          </Link>
          <p class="text-xs text-textsc">{jalali}</p>
          <div
            class="text-sm text-textsc text-justify leading-6 line-clamp-p"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
          <Link
            href={slug}
            class="flex flex-row items-center relative [&_svg]:hover:translate-x-[-12px] [&_svg]:hover:delay-250"
          >
            <div class=" text-primary-1 text-base">مشاهده بیشتر</div>
            <div class="transition-all duration-500 h-[44px]">
              <ArrowLeftBtn class="translate-y-0 translate-x-[6px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
</template>

<script setup>
  let options = { year: "numeric", month: "long", day: "numeric" };
  const jalali = new Date(postDate).toLocaleDateString("fa-IR", options);
</script>

