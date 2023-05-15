<script setup lang="ts">
import {ref} from 'vue';
import {useRouter, type Router} from 'vue-router';


const router: Router = useRouter()

const prevPage = () => {
  router.push("/dashboard")
}

const nextPage = () => {
  router.push("/login")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <span class="top-0 left-0 absolute ml-5 mt-5" @click="prevPage">
        <img src="/public/ArrowLeft.svg" alt="">
      </span>
      <h1 class="mt-14 mb-3 text-5xl text-left font-medium ">Create your Account</h1>
    </header>
    <div class="space-y-2 text-orange-500 w-4/5 my-5">
      <div class="flex flex-col space-y-5 justify-center">
        <div class="relative ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="input-group-1" class="block w-full bg-gray-100 h-10 rounded-md pl-10" placeholder="Email">
        </div>
        <div class="relative ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/public/password.svg" alt="">
          </div>
          <input type="password" id="input-group-1" class="block w-full bg-gray-100 h-10 rounded-md pl-10" placeholder="Password">
        </div>
        <div
            class="">
          <label class=" items-center flex space-x-6 justify-center content-center">
            <div class="block ml-5 items-center flex content-center">
              <input type="checkbox" class="form-checkbox rounded-md h-5 w-5"/>
              <span class="checkmark"></span>
            </div>
            <span class="mx-2 text-gray-700">Remember me</span>
          </label>
        </div>
        <button class="w-full text-white bg-orange-500  py-3 rounded-full">
          <p>Sing in with password</p>
        </button>
        <div class="grid grid-cols-8 items-center">
          <div class="col-span-2 w-full bg-black h-[1px]"></div>
          <div class="col-span-4 text-black">or continue with</div>
          <div class="col-span-2 w-full bg-black h-[1px]"></div>
        </div>

        <button class="border-gray-500 w-full border text-black px-8 py-2 rounded-full flex justify-between items-center">
          <img src="/public/google.svg" alt="">
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
    <div class="w-full">
      <div class="inline">Don't have an account?</div>
      <div @click="nextPage" class="text-orange-500 inline">
        Sing in
      </div>
    </div>
  </div>
</template>
<style>

input[type="checkbox"]  {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid rgb(249, 115, 22);
  position: absolute;

}
input[type="checkbox"]:checked  {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid rgb(249, 115, 22);
  background-color: rgb(249, 115, 22);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
input:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  width: 5px;
  height: 10px;
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 8px;
  margin-top: -6px;
  z-index: 1;

}

</style>


