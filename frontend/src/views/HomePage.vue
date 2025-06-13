<script setup>
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";
const user = useUser();
const { currentUser } = storeToRefs(user);


</script>

<template>
  <div>
    <h1>Hello {{ currentUser.name }}</h1>
  </div>
</template>
