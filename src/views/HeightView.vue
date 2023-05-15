<script setup lang="ts">
import {ref} from 'vue';
import {useRouter, type Router} from 'vue-router';

const router: Router = useRouter()

const prevPage = () => {
  router.push("/weight")
}

const nextPage = () => {
  router.push("/goals")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <h1 class="mb-5 text-3xl font-bold capitalize">What is Your Height?</h1>
      <p>Height in cm. Don't worry, you can always change it later.</p>
    </header>
    <div class="space-y-10 text-orange-500">
      Height picker
    </div>
    <div class="flex items-center justify-between w-full space-x-5">
      <div @click="prevPage" class="w-full p-3 text-lg font-bold text-orange-500 bg-orange-100 rounded-full">Back</div>
      <div @click="nextPage" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">
        Continue
      </div>
    </div>
  </div>
</template>


