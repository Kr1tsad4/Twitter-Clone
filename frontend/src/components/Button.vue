<script setup></script>

<template>
  <div
    class="bg-white w-75 h-10 rounded-4xl flex items-center justify-center hover:bg-gray-200"
  >
    <div class="flex gap-2 text-black cursor-pointer">
      <slot name="logo"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>
