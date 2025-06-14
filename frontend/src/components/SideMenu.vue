<script setup>
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";
const user = useUser();
const { currentUser } = storeToRefs(user);
</script>

<template>
  <div>
    <div class="min-h-screen bg-black">
      <div class="pt-4 mb-6">
        <svg
          aria-label="X logo"
          width="28"
          height="28"
          viewBox="0 0 300 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
      </div>
      <div class="font-bold text-xl flex flex-col gap-7">
        <p>หน้าแรก</p>
        <p>สำรวจ</p>
        <p>การแจ้งเตือน</p>
        <p>ข้อความ</p>
        <p>ชุมชน</p>
        <p>Premium</p>
        <p>องค์กรที่ได้รับการยืนยัน</p>
        <p>ข้อมูลส่วนตัว</p>
        <p>เพิ่มเติม</p>
        <div
          class="w-56 h-13 -mt-2 bg-white rounded-4xl flex items-center justify-center"
        >
          <h1 class="font-semibold text-black text-sm">โพสต์</h1>
        </div>
      </div>
      <div class="mt-20 flex gap-5">
        <div class="avatar">
          <div
            class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2"
          >
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <h1 class="font-bold">{{ currentUser.name }}</h1>
      </div>
    </div>
  </div>
</template>
