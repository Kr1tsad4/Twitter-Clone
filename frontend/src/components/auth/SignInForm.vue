<script setup>
import SignOption from "./SignOptionButton.vue";
import Button from "../Button.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watchEffect } from "vue";
import InputBox from "./InputBox.vue";
const route = useRoute();
const emits = defineEmits(["passwordPage", "signIn"]);
const props = defineProps({
  isInformationFilled: {
    type: Boolean,
    require: true,
  },
});

const userName = ref("");
const password = ref("");
const enableNextBtn = ref(false);
const enableLoginBtn = ref(false);
const isUserNameFilled = computed(() => {
  return !!userName.value;
});

const isPasswordFilled = computed(() => {
  return !!password.value;
});

const userNameIsEmail = computed(() => {
  return userName.value.includes("@") && userName.value.includes(".");
});

const user = computed(() => ({
  name: userNameIsEmail.value ? null : userName.value,
  email: !userNameIsEmail.value ? null : userName.value,
  password: password.value,
}));
watchEffect(() => {
  if (isUserNameFilled.value) {
    enableNextBtn.value = true;
  } else {
    enableNextBtn.value = false;
  }

  if (isPasswordFilled.value && isUserNameFilled) {
    enableLoginBtn.value = true;
  } else {
    enableLoginBtn.value = false;
  }
});
</script>
<template>
  <div>
    <div class="ml-40">
      <div class="mt-3" v-if="!props.isInformationFilled">
        <p class="font-bold text-[28px]">Sign in to X</p>
        <SignOption />
        <div class="mt-3">
          <InputBox
            type="text"
            formType="signin"
            v-model="userName"
            placeholder="Phone, email, or username"
          />
        </div>
        <button
          :disabled="!enableNextBtn"
          @click="$emit('passwordPage')"
          :class="[
            'mt-7 w-[300px] h-9 rounded-4xl flex items-center justify-center text-black font-bold',
            enableNextBtn
              ? 'bg-white cursor-pointer'
              : 'bg-[rgba(241,243,245,0.4)]',
          ]"
        >
          Next
        </button>
        <Button class="mt-6 border-1 border-gray-500">
          <template #text>
            <h1 class="text-base font-semibold text-white">Forgot password?</h1>
          </template>
        </Button>
        <div class="mt-11">
          <h1>
            Don't have an account?
            <router-link :to="{ name: 'SignUpPage' }">
              <span class="text-blue-500 hover:underline cursor-pointer"
                >Sign up</span
              >
            </router-link>
          </h1>
        </div>
      </div>
    </div>
    <div class="mt-3 ml-20" v-if="props.isInformationFilled">
      <p class="font-bold text-[28px]">Enter your password</p>
      <div>
        <div class="flex flex-col">
          <p class="text-[rgba(178,185,193,0.4)] -mb-5">Username</p>
          <InputBox
            type="text"
            v-model="userName"
            placeholder="Phone, email, or username"
            :disable="true"
          />
        </div>

        <InputBox v-model="password" type="password" placeholder="Password" />
        <h1
          class="text-[12px] text-blue-500 p-2 cursor-pointer hover:underline"
        >
          Forgot password?
        </h1>
      </div>
      <div>
        <button
          :class="[
            ' mt-50 w-[430px] h-13 rounded-4xl flex items-center justify-center text-black font-bold',
            enableLoginBtn
              ? 'bg-white cursor-pointer'
              : 'bg-[rgba(241,243,245,0.4)]',
          ]"
          @click="$emit('signIn', route.path, user)"
          :disabled="!enableLoginBtn"
        >
          Log in
        </button>

        <div class="mt-5">
          <h1 class="text-[rgba(217,222,228,0.4)]">
            Don't have an account?
            <router-link :to="{ name: 'SignUpPage' }">
              <span class="text-blue-500 hover:underline cursor-pointer"
                >Sign up</span
              >
            </router-link>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
