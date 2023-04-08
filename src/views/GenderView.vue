<script setup lang="ts">
import MaleIcon from '@/components/icons/MaleIcon.vue';
import FemaleIcon from '@/components/icons/FemaleIcon.vue';
import { ref } from 'vue';
import { useRouter, type Router } from 'vue-router';

const router: Router = useRouter()

const selectedGender = ref<string>('')

const selectGender = (gender: string) => {
  selectedGender.value = gender
}

const nextPage = () => {
  router.push("/ages")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <h1 class="mb-5 text-3xl font-bold capitalize">Tell us about yourself</h1>
      <p>To give you a better experience and results we need to know your gender</p>
    </header>
    <div class="space-y-10 text-white">
      <div @click="selectGender('male')" class="flex flex-col items-center justify-center w-40 h-40 transition-colors duration-500 rounded-full"
        :class="selectedGender === 'male' ? 'bg-orange-500' : 'bg-gray-500 shadow-lg'">
        <MaleIcon class="w-16 h-16" />
        <p class="font-bold">Male</p>
      </div>
      <div @click="selectGender('female')" class="flex flex-col items-center justify-center w-40 h-40 transition-colors duration-500 rounded-full"
        :class="selectedGender === 'female' ? 'bg-orange-500' : 'bg-gray-500 shadow-lg'">
        <FemaleIcon class="w-16 h-16" />
        <p class="font-bold">Female</p>
      </div>
    </div>
    <div @click="nextPage" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">Continue</div>
  </div>
</template>
