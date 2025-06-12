<script setup>
const emits = defineEmits(["passwordPage", "signUp"]);
const props = defineProps({
  isInformationFilled: {
    type: Boolean,
    require: true,
  },
});
</script>
<template>
  <div>
    <div class="ml-20" v-if="!props.isInformationFilled">
      <div class="mt-3">
        <p class="font-semibold text-[34px]">Create your account</p>
      </div>
      <div>
        <input
          type="text"
          class="input-style pl-2 w-[450px]"
          placeholder="Name"
        />

        <input
          type="text"
          class="input-style pl-2 w-[450px]"
          placeholder="Email"
        />
      </div>
      <div class="mt-9 w-[450px]">
        <p class="font-semibold">Date of birth</p>
        <p class="text-[rgba(178,185,193,0.4)] text-sm mt-2">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else
        </p>
      </div>

      <div class="flex gap-2 w-[450px]">
        <select
          name="month"
          class="input-style w-[220px] text-[rgba(178,185,193,0.4)] pb-7 text-sm"
        >
          <option disabled selected value="">Month</option>
        </select>
        <select
          name="day"
          class="input-style w-[100px] text-[rgba(178,185,193,0.4)] pb-7 text-sm"
        >
          <option disabled selected value="">Day</option>
        </select>
        <select
          name="year"
          class="input-style w-[130px] text-[rgba(178,185,193,0.4)] pb-7 text-sm"
        >
          <option disabled selected class="">Year</option>
        </select>
      </div>
      <div
        class="bg-[rgba(241,243,245,0.4)] cursor-pointer mt-19 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold"
        @click="$emit('passwordPage')"
      >
        Next
      </div>
    </div>

    <div class="ml-20" v-if="props.isInformationFilled">
      <p class="font-semibold text-[34px]">Create your password</p>

      <div>
        <input
          type="password"
          class="input-style pl-2 w-[450px]"
          placeholder="Password"
        />

        <input
          type="password"
          class="input-style pl-2 w-[450px]"
          placeholder="Confirm password"
        />
      </div>
      <div
        class="bg-[rgba(241,243,245,0.4)] cursor-pointer mt-72 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold"
        @click="$emit('signUp')"
      >
        Sign up
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-style {
  border-width: 2px;
  border-color: rgba(77, 86, 96, 0.4);
  height: 3.75rem;
  margin-top: 1.75rem;
  border-radius: 0.125rem;
  outline: none;
}

.input-style:focus {
  border-color: #3b82f6;
  outline: none;
}
</style>
