<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, type Router } from 'vue-router';
import ScrollPicker from 'vue3-scroll-picker';
const router: Router = useRouter()

const prevPage = () => {
  router.push("/gender")
}

const nextPage = () => {
  router.push("/weight")
}

const options = ref([
  {
    label: "A1",
    value: "a1"
  },
  {
    label: "A2",
    value: "a2"
  },
])

const selections = ref(null)
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <h1 class="mb-5 text-3xl font-bold capitalize">How old are you?</h1>
      <p>Age in years. This will help us to personalize an exercise program plan that suits you.</p>
    </header>
    <div class="space-y-10 text-orange-500">
      <scroll-picker :options="options" v-model="selections" />
    </div>
    <div class="flex items-center justify-between w-full space-x-5">
      <div @click="prevPage" class="w-full p-3 text-lg font-bold text-orange-500 bg-orange-100 rounded-full">Back</div>
      <div @click="nextPage" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">Continue
      </div>
    </div>
  </div>
</template>
