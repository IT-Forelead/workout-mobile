<script setup lang="ts">
import {ref} from 'vue';
import {useRouter, type Router} from 'vue-router';


const router: Router = useRouter()

const prevPage = () => {
  router.push("/dashboard")
}

const nextPage = () => {
  router.push("/singin")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <h1 class="mb-5 text-3xl font-bold capitalize">Fill Your Profile</h1>
      <p>Don't worry, you can always change it later or you can skip it for now</p>
    </header>
    <div class="space-y-10 text-orange-500 w-4/5 my-5">
      <div class="inline-block relative">
        <img src="/public/avatar.png" class="w-36 h-36 rounded-full" alt="avatar">
        <img src="/public/EditImage.svg" class="bg-orange-500 text-white rounded-lg p-1 absolute bottom-0 right-0 z-10 "  alt="Edit Pencil">
      </div>
      <div class="flex flex-col space-y-5 justify-center">
        <div>
        <input type="text" class="block w-full bg-gray-100 h-10 rounded-md p-4" placeholder="Full Name">
        </div>
        <div>
          <input type="text" class="block w-full bg-gray-100 h-10 rounded-md p-4" placeholder="Nickname">
        </div>
        <div>
          <input type="text" class="block w-full bg-gray-100 h-10 rounded-md p-4" placeholder="Nickname">
        </div>
        <div class="relative mb-6">
          <input type="text" id="input-group-1" class="block w-full bg-gray-100 h-10 rounded-md p-4" placeholder="Email">
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
        </div>
        <div class="flex">
          <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-0.5 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
            <img src="/public/uzb.svg" alt=""> <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input type="number" id="search-dropdown" class="block w-full bg-gray-100 h-10 rounded-r-md p-4" placeholder="Phone Number" required>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between w-full space-x-5">
      <div @click="prevPage" class="w-full p-3 text-lg font-bold text-orange-500 bg-orange-100 rounded-full">Skip</div>
      <div @click="nextPage" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">
        Start
      </div>
    </div>
  </div>
</template>


