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
  <div>
    <div v-if="isMobileDevice">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
          <div :key="route.name || ''">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
    <div v-else class="flex items-center justify-center w-full h-screen text-4xl font-bold text-red-500">
      This project for only mobile devices
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  /* opacity: 0; */
}
</style>
