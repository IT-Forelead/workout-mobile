<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const isMobileDevice = ref<boolean>(false)

const computeWindowResize = () => {
  isMobileDevice.value = window.innerWidth < 769
}

window.addEventListener("resize", computeWindowResize)

onMounted(() => {
  isMobileDevice.value = window.innerWidth < 769
})

onUnmounted(() => {
  window.removeEventListener("resize", computeWindowResize);
})
</script>

<template>
  <div v-if="isMobileDevice">
    <RouterView />
  </div>
  <div v-else class="flex items-center justify-center w-full h-screen text-4xl font-bold text-red-500">
    This project for only mobile devices
  </div>
</template>

<style scoped></style>
