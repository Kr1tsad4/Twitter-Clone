<script setup>
import SignOption from "./SignOption.vue";
import Button from "../Button.vue";

const emits = defineEmits(["passwordPage", "signIn"]);
const props = defineProps({
  isInformationFilled: {
    type: Boolean,
    require: true,
  },
});
</script>
<template>
  <div>
    <div class="ml-40">
      <div class="mt-3" v-if="!props.isInformationFilled">
        <p class="font-bold text-[28px]">Sign in to X</p>
        <SignOption />
        <div class="mt-3">
          <input
            type="text"
            class="input-style pl-2 w-[290px] h-15 border-1 border-[rgba(178,185,193,0.4)] rounded-sm"
            placeholder="Phone, email, or username"
          />
        </div>
        <Button
          class="mt-7 bg-white cursor-pointer"
          @click="$emit('passwordPage')"
        >
          <template #text>
            <h1 class="text-base font-sans font-semibold">Next</h1>
          </template>
        </Button>
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
        <input
          class="input-style pl-2 w-[430px] h-15 border-1 border-[rgba(178,185,193,0.4)] rounded-sm"
        />

        <input
          type="password"
          class="input-style pl-2 w-[430px] h-15 border-1 border-[rgba(178,185,193,0.4)] rounded-sm"
          placeholder="Password"
        />
        <h1
          class="text-[12px] text-blue-500 p-2 cursor-pointer hover:underline"
        >
          Forgot password?
        </h1>
      </div>
      <div>
        <div
          class="bg-[rgba(241,243,245,0.4)] cursor-pointer mt-50 w-[430px] h-13 rounded-4xl flex items-center justify-center text-black font-bold"
          @click="$emit('signIn')"
        >
          Log in
        </div>
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
