<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const isInformationFilled = ref(false);
const createPasswordPage = () => {
  isInformationFilled.value = !isInformationFilled.value;
};

const signUp = () => {
    router.push({name:'HomePage'})
};
</script>
<template>
  <div class="max-w-full flex justify-center">
    <div class="w-[600px] h-[640px] bg-black mt-14 rounded-xl">
      <div class="flex gap-67 p-2 pt-3">
        <div v-if="!isInformationFilled">
          <router-link :to="{ name: 'AuthPage' }">
            <p class="text-xl font-mono pl-2 cursor-pointer">x</p>
          </router-link>
        </div>

        <p
          class="cursor-pointer"
          v-if="isInformationFilled"
          @click="createPasswordPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </p>

        <svg
          aria-label="X logo"
          width="30"
          height="30"
          viewBox="0 0 300 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
      </div>
      <div class="ml-20" v-show="!isInformationFilled">
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
          class="bg-[rgba(241,243,245,0.4)] mt-19 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold"
          @click="createPasswordPage"
        >
          Next
        </div>
      </div>

      <div class="ml-20" v-show="isInformationFilled">
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
          class="bg-[rgba(241,243,245,0.4)] mt-72 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold"
          @click="signUp"
        >
          Sign up
        </div>
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
