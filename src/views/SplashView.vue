<script setup lang="ts">
import FitnessIcon from '@/components/icons/FitnessIcon.vue';
import SpinnerIcon from '@/components/icons/SpinnerIcon.vue';
import { onMounted } from 'vue';
import { useRouter, type Router } from 'vue-router';

const router: Router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/welcome')
  }, 2500)
})
</script>
<template>
  <div class="flex flex-col items-center justify-end w-full h-screen bg-gradient-to-r from-yellow-500 to-orange-500">
    <FitnessIcon class="w-40 h-40 mb-40 text-white"/>
    <SpinnerIcon class="mb-20 text-white w-14 h-14"/>
  </div>
</template>

<style scoped></style>