<script setup>
import Button from "../components/Button.vue";
import Form from "@/views/Form.vue";
import SignOption from "@/components/auth/SignOption.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSignUp = computed(() => route.path === "/signup");
const isSignIn = computed(() => route.path === "/login");
</script>

<template>
  <div
    :class="['max-w-ful min-h-screen ',isSignIn || isSignUp ? 'bg-gray/10':'bg-black']"
  >
    <div class="flex justify-center items-center pt-16 gap-70">
      <div
        :class="[
          'pr-10 pl-50 relative',
          isSignIn || isSignUp ? 'bg-gray/30 opacity-50 pointer-events-none' : '',
        ]"
      >
        <svg
          aria-label="X logo"
          width="250"
          height="250"
          viewBox="0 0 300 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
      </div>
      <div :class="isSignIn || isSignUp ? ['bg-gray/30 opacity-50 pointer-events-none'] : ''">
        <p class="font-bold text-[75px] text-white font-sans">Happening now</p>
        <p class="font-extrabold text-[28px] pt-10">Join today.</p>
        <SignOption />
        <router-link :to="{ name: 'SignUpPage' }">
          <Button class="mt-3 bg-blue-400 hover:bg-blue-500">
            <template #text>
              <h1 class="text-base font-sans font-semibold text-white">
                Create account
              </h1>
            </template>
          </Button>
        </router-link>
        <div class="mt-1">
          <p class="text-[11px] mt-2 w-72 font-serif text-gray-500">
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

        <div class="font-bold mt-11">
          <h1>Already have an account?</h1>
        </div>
        <router-link :to="{ name: 'SignInPage' }">
          <Button class="mt-4 border-1 border-gray-500">
            <template #text>
              <h1 class="text-base font-semibold text-blue-400">Sign in</h1>
            </template>
          </Button>
        </router-link>
      </div>
      <div v-if="isSignUp || isSignIn" class="absolute">
        <Form :type="isSignUp ? 'signup' : 'signin'" />
      </div>
    </div>
  </div>
</template>
