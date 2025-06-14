<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import InputBox from "./InputBox.vue";

const route = useRoute();
const emits = defineEmits(["passwordPage", "signUp"]);
const props = defineProps({
  isInformationFilled: {
    type: Boolean,
    require: true,
  },
});

const name = ref();
const email = ref();
const password = ref("");
const confirmPassword = ref("");
const selectedMonth = ref("");
const selectedDay = ref("");
const selectedYear = ref("");

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 125 }, (_, i) => currentYear - i);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const getDob = computed(() => {
  if (!selectedYear.value || !selectedMonth.value || !selectedDay.value)
    return "";
  return `${selectedYear.value}-${selectedMonth.value}-${selectedDay.value}`;
});

const enableNextBtn = ref(false);
const enableSignUpBtn = ref(false);
const checkIsInfoFilled = computed(() => {
  return !!(
    name.value &&
    email.value &&
    selectedYear.value &&
    selectedMonth.value &&
    selectedDay.value
  );
});
const checkPassword = computed(() => {
  if (!password.value || !confirmPassword.value) return false;
  return password.value === confirmPassword.value;
});
const newAccount = computed(() => ({
  name: name.value,
  email: email.value,
  password: checkPassword.value ? confirmPassword.value : "",
  dob: getDob.value,
}));

watchEffect(() => {
  if (checkIsInfoFilled.value) {
    enableNextBtn.value = true;
  } else {
    enableNextBtn.value = false;
  }
  if (checkPassword.value) {
    enableSignUpBtn.value = true;
  } else {
    enableSignUpBtn.value = false;
  }
});
</script>
<template>
  <div>
    <div class="ml-20" v-if="!props.isInformationFilled">
      <div class="mt-3">
        <p class="font-semibold text-[34px]">Create your account</p>
      </div>
      <div>
        <InputBox
          type="text"
          formType="signup"
          v-model="name"
          placeholder="Name"
        />
        <InputBox
          type="email"
          formType="signup"
          v-model="email"
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
        <div>
          <select
            name="month"
            class="input-style w-[220px]"
            v-model="selectedMonth"
          >
            <option disabled selected value="">Month</option>
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
              class="bg-black"
            >
              {{ month }}
            </option>
          </select>
        </div>
        <div>
          <select
            name="day"
            class="input-style w-[100px]"
            v-model="selectedDay"
          >
            <option disabled selected value="">Day</option>
            <option
              v-for="day in days"
              :key="day"
              :value="day"
              class="bg-black"
            >
              {{ day }}
            </option>
          </select>
        </div>
        <div>
          <select
            name="year"
            class="input-style w-[130px]"
            v-model="selectedYear"
          >
            <option disabled selected value="">Year</option>

            <option
              v-for="(year, index) in years"
              :key="index"
              :value="year"
              class="bg-black"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <button
        :disabled="!enableNextBtn"
        @click="$emit('passwordPage')"
        :class="[
          'mt-19 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold',
          enableNextBtn
            ? 'bg-white cursor-pointer'
            : 'bg-[rgba(241,243,245,0.4)]',
        ]"
      >
        Next
      </button>
    </div>

    <div class="ml-20" v-if="props.isInformationFilled">
      <p class="font-semibold text-[34px]">Create your password</p>

      <div>
        <InputBox
          type="password"
          formType="signup"
          v-model="password"
          placeholder="Password"
        />
        <InputBox
          type="password"
          formType="signup"
          v-model="confirmPassword"
          placeholder="Confirm password"
        />
      </div>
      <button
        :disabled="!enableSignUpBtn"
        :class="[
          'mt-72 w-[450px] h-13 rounded-4xl flex items-center justify-center text-black font-bold',
          enableSignUpBtn
            ? 'bg-white cursor-pointer'
            : 'bg-[rgba(241,243,245,0.4)]',
        ]"
        @click="$emit('signUp', route.path, newAccount)"
      >
        Sign up
      </button>
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
