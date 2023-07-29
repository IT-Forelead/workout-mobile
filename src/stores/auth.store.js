import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(false);
  const getLoginStatus = computed(() => isLogin.value);
  function setLogin(data) {
    isLogin.value = data;
  }

  return { isLogin, getLoginStatus, setLogin };
});
