import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  const isOpenQRDialog = ref(false);
  const getQRDialogStatus = computed(() => isOpenQRDialog.value);
  function openQRDialog() {
    isOpenQRDialog.value = true;
  }
  function closeQRDialog() {
    isOpenQRDialog.value = false;
  }

  return { isOpenQRDialog, getQRDialogStatus, openQRDialog, closeQRDialog };
});
