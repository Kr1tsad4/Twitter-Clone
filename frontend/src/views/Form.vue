<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SignUpForm from "@/components/auth/SignUpForm.vue";
import SignInForm from "@/components/auth/SignInForm.vue";
const props = defineProps({
  type: {
    type: String,
    require: true,
  },
});
const router = useRouter();
const route = useRoute();
const isInformationFilled = ref(false);
const passwordPage = () => {
  isInformationFilled.value = !isInformationFilled.value;
};

const goToHomePage = () => {
  router.push({ name: "HomePage" });
};
</script>
<template>
  <div class="max-w-full flex justify-center">
    <div class="w-[600px] h-[640px] bg-black mt-14 rounded-xl">
      <div class="flex gap-67 p-2 pt-3">
        <div v-if="!isInformationFilled || route.path === '/login'">
          <router-link :to="{ name: 'LandingPage' }">
            <p class="text-xl font-mono pl-2 cursor-pointer">x</p>
          </router-link>
        </div>
        <div v-if="isInformationFilled && route.path !== '/login'">
          <p
            class="text-xl font-mono pl-2 cursor-pointer"
            @click="passwordPage"
          >
            Back
          </p>
        </div>
        <p
          class="cursor-pointer"
          v-if="props.isInformationFilled"
          @click="$emit('passwordPage')"
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
      <div v-if="props.type === 'signup'">
        <SignUpForm
          :isInformationFilled="isInformationFilled"
          @passwordPage="passwordPage"
          @signUp="goToHomePage"
        />
      </div>
      <div v-if="props.type === 'signin'">
        <SignInForm
          :isInformationFilled="isInformationFilled"
          @passwordPage="passwordPage"
          @signIn="goToHomePage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
