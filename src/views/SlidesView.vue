<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter, type Router } from 'vue-router';

const router: Router = useRouter()

const slides = reactive({
  firstSlide: true,
  secondSlide: false,
  thirdSlide: false,
})

const nextPage = (next: number) => {
  if (next === 1) {
    slides.firstSlide = false
    slides.secondSlide = true
  } else if (next === 2) {
    slides.secondSlide = false
    slides.thirdSlide = true
  } else {
    router.push('/gender')
  }
}

</script>
<template>
  <div v-if="slides.firstSlide" class="w-full h-screen text-center">
    <div class="h-[60vh] w-full bg-[url('/slide_1.jpg')] bg-cover bg-right bg-no-repeat"></div>
    <div class="h-[40vh] w-full flex justify-center items-center px-5 flex-col">
      <h1 class="text-4xl font-bold">Find the right <br> workout for what <br> you need</h1>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-10 h-2 bg-orange-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
      <div @click="nextPage(1)" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">Next</div>
    </div>
  </div>
  <div v-if="slides.secondSlide" class="w-full h-screen text-center">
    <div class="h-[60vh] w-full bg-[url('/slide_2.jpg')] bg-cover bg-center bg-no-repeat"></div>
    <div class="h-[40vh] w-full flex justify-center items-center px-5 flex-col">
      <h1 class="text-4xl font-bold">Make suitable <br> workouts and great <br> results</h1>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-10 h-2 bg-orange-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
      <div @click="nextPage(2)" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">Next</div>
    </div>
  </div>
  <div v-if="slides.thirdSlide" class="w-full h-screen text-center">
    <div class="h-[60vh] w-full bg-[url('/slide_3.jpg')] bg-cover bg-center bg-no-repeat"></div>
    <div class="h-[40vh] w-full flex justify-center items-center px-5 flex-col">
      <h1 class="text-4xl font-bold">Let's do a workout <br> and live healthy <br> with us</h1>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-10 h-2 bg-orange-500 rounded-full"></div>
      </div>
      <div @click="nextPage(0)" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">Next</div>
    </div>
  </div>
</template>


<style scoped></style>