<script setup>
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";
import SideMenu from "@/components/SideMenu.vue";
const user = useUser();
const { currentUser } = storeToRefs(user);
</script>

<template>
  <div>
    <div class="min-h-screen flex justify-center items-start bg-black">
      <div class="w-full max-w-[1200px] grid grid-cols-3">
        <div
          class="min-h-screen w-[250px] -ml-5 border-r-1  border-[rgba(143,149,157,0.4)]"
        >
          <SideMenu />
        </div>
        <div
          class="border-r-1 border-[rgba(143,149,157,0.4)] min-h-screen w-[600px] -ml-41"
        >

        </div>
        <div class="min-h-screen w-[400px] ml-9">

        </div>
      </div>
    </div>
  </div>
</template>
