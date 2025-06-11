<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
const showCreateForm = ref(false);

const toggleCreateForm = () => {
  return (showCreateForm.value = !showCreateForm.value);
};
</script>

<template>
  <div
    :class="[
      'max-w-ful min-h-screen',
      showCreateForm ? 'bg-[rgba(44,52,60,0.4)]' : 'bg-black',
    ]"
  >
    <div
      class="flex flex-col justify-center items-center"
      v-if="!showCreateForm"
    >
      <div class="mt-28 mb-6">
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
      <p class="font-bold text-[23px]">Create an account</p>
      <Button class="mt-8">
        <template #logo>
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
        </template>
        <template #text>
          <h1 class="text-sm font-semibold text-gray-600">
            Sign up with Google
          </h1>
        </template>
      </Button>
      <Button class="mt-4">
        <template #logo>
          <svg
            aria-label="Apple logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1195 1195"
          >
            <path
              fill="black"
              d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
            ></path>
          </svg>
        </template>
        <template #text>
          <h1 class="text-sm font-serif pt-[2px]">Sign up with Apple</h1>
        </template>
      </Button>

      <div class="flex items-center w-72 mt-5">
        <div class="flex-grow border-t border-gray-600"></div>
        <span class="mx-4 text-gray-600 text-sm font-medium">OR</span>
        <div class="flex-grow border-t border-gray-600"></div>
      </div>

      <Button class="mt-4">
        <template #text>
          <h1
            class="text-base font-sans font-semibold"
            @click="toggleCreateForm"
          >
            Create account
          </h1>
        </template>
      </Button>

      <div class="mt-1">
        <p class="text-[11px] mt-2 w-72 text-center font-serif text-gray-500">
          By signing up, you agree to the
          <span class="font-sans text-blue-500 hover:underline cursor-pointer"
            >Terms of Service</span
          >
          and
          <span class="font-sans text-blue-500 hover:underline cursor-pointer"
            >Privacy Policy</span
          >, including
          <span class="font-sans text-blue-500 hover:underline cursor-pointer"
            >Cookie Use.</span
          >
        </p>
      </div>

      <div class="font-bold mt-8">
        <h1>Already have an account?</h1>
      </div>
      <Button class="mt-4">
        <template #text>
          <h1 class="text-base font-semibold text-blue-400">Sign in</h1>
        </template>
      </Button>
    </div>
    <div
      v-if="showCreateForm"
      class="flex flex-col justify-center items-center"
    >
      <RegisterForm @closeCreateForm="toggleCreateForm" />
    </div>
  </div>
</template>
