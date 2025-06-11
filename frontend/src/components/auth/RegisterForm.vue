<script setup>
const emits = defineEmits(["closeCreateForm"]);
</script>
<template>
  <div>
    <div class="w-[600px] h-[640px] bg-black mt-14 rounded-xl">
      <div class="flex gap-67 p-2">
        <p
          class="text-xl font-mono pl-2 cursor-pointer"
          @click="$emit('closeCreateForm')"
        >
          x
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
      <div class="ml-20 mt-5">
        <p class="font-bold text-[34px]">Create your account</p>
      </div>
    </div>
  </div>
</template>
