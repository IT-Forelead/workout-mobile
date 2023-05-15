<script setup lang="ts">
import {ref} from 'vue';
import {useRouter, type Router} from 'vue-router';


const router: Router = useRouter()

const prevPage = () => {
  router.push("/dashboard")
}

const nextPage = () => {
  router.push("/singup")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <span class="top-0 left-0 absolute ml-5 mt-5" @click="prevPage">
        <img src="/public/ArrowLeft.svg" alt="">
      </span>
      <h1 class="mt-36 mb-3 text-3xl font-bold capitalize">Let's you in</h1>
    </header>
    <div class="space-y-10 text-black w-4/5 my-5">
      <button class="border-gray-500 w-full border px-8 py-2 rounded-full flex justify-between items-center">
        <img src="/public/google.svg" alt="">
        <p>Continue with Google</p>
      </button>
      <div class="grid grid-cols-3 items-center">
        <div class="grid-span-5"><hr></div>
        <div class="grid-span-2">or</div>
        <div class="grid-span-5"><hr></div>
      </div>
      <button class="w-full text-white bg-orange-500  py-3 rounded-full">
        <p>Sing in with password</p>
      </button>
    </div>
    <div class="w-full">
      <div class="inline">Don't have an account?</div>
      <div @click="nextPage" class="text-orange-500 inline">
        Sing up
      </div>
    </div>
  </div>
</template>


