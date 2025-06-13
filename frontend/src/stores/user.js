import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
  const currentUser = ref({});

  const setUser = (user) => {
    currentUser.value = user;
  };
  
  return { currentUser, setUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
