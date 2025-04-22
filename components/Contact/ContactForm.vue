<template>
  <div>
    <FormKit
      type="form"
      :actions="false"
      @submit="handleSubmit"
      message-class="text-[#FF5761] text-[14px] mr-1 mt-4"
    >
      <h2 class="text-lg font-bold text-primary-1 text-center w-full mb-5">
        فرم تماس با ما
      </h2>

      <FormKit
        type="text"
        name="name"
        placeholder="نام و نام خانوادگی"
        validation="required|matches:/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیءئؤإأةًٌٍَُِّ\s]+$/"
        :validation-messages="{
          required: 'این فیلد اجباریست',
          matches: 'نام خود را به فارسی وارد کنید',
        }"
        input-class="w-full border focus:border-primary-1 border-[#ddd] p-4 rounded-xl text-sm outline-0 mb-3"
        outer-class="mb-3"
        message-class="text-[#FF5761] text-[12px] mr-1"
      />

      <FormKit
        type="text"
        name="phone"
        placeholder="شماره تماس"
        maxlength="11"
        validation="required|length:11|starts_with:09"
        :validation-messages="{
          required: 'این فیلد اجباریست',
          length: 'شماره تماس باید 11 رقم باشد',
          startsWith: 'شماره تماس شما باید با 09 شروع شود',
        }"
        input-class="w-full border p-4 rounded-xl text-sm outline-0 mb-3 transition-all
        border-[#ddd] focus:border-primary-1
        data-[invalid=true]:border-[#FF5761] data-[invalid=true]:focus:border-[#FF5761]"
        outer-class="mb-3"
        message-class="text-[#FF5761] text-[12px] mr-1"
        @keydown="allowOnlyNumbers"
      />

      <FormKit
        type="textarea"
        name="message"
        placeholder="پیام شما"
        validation="required|matches:/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیءئؤإأةًٌٍَُِّ\s]+$/"
        :validation-messages="{
          required: 'این فیلد اجباریست',
          matches: 'پیام خود را به فارسی وارد کنید',
        }"
        input-class="w-full border focus:border-primary-1 border-[#ddd] p-4 rounded-xl text-sm outline-0 mb-3"
        outer-class="mb-6"
        message-class="text-[#FF5761] text-[12px] mr-1"
      />

      <FormKit
        type="submit"
        label="ارسال"
        input-class="px-8 py-2.5 text-sm text-white rounded-xl bg-primary-1 hover:bg-primary-800"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const allowOnlyNumbers = (e) => {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"];
  if ((e.key >= "0" && e.key <= "9") || allowedKeys.includes(e.key)) return;
  e.preventDefault();
};

const handleSubmit = async (values) => {
  try {
    const response = await $fetch("/api/for", {
      method: "POST",
      body: values,
    });

    toast("ارسال فرم با موفقیت انجام شد", {
      theme: "colored",
      type: "success",
      transition: "slide",
    });
  } catch (error) {
    toast(`ارسال فرم با خطا انجام شد، مجددا تلاش کنید - ${error.message}`, {
      theme: "colored",
      type: "error",
      transition: "slide",
    });
  }
};
</script>

<style scoped>
:deep([data-invalid] .formkit-input) {
  border-color: #ff5761 !important;
}

:deep([data-invalid] .formkit-input:focus) {
  border-color: #ff5761 !important;
}
</style>
