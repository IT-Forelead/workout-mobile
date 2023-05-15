<script setup lang="ts">
import Logo from "@/components/icons/Apple.vue"
import Bell from "@/components/icons/Bell.vue"
import Mark from "@/components/icons/BookmarkEmpty.vue"
import {useRouter, type Router} from 'vue-router';
const router: Router = (useRouter())
const notificationPage = () => {
    router.push('/notification')
}
const bookmarkPage = () =>  {
    router.push('/bookmark')
}
</script>
<template>
  <div class="flex px-5 py-3 justify-between top-0 sticky z-10 absolute w-full bg-white items-center">
    <div class="block">
      <div class="flex space-x-5 items-center">
        <Logo class="w-9 h-9"/>
        <div class="text-lg font-medium">Trim.uz</div>
      </div>
    </div>
    <div class="flex space-x-5">
      <div @click="notificationPage">
        <Bell class="w-6 h-6" />
      </div>
      <div @click="bookmarkPage">
        <Mark class="w-6 h-6" fill="#888888" />
      </div>
    </div>
  </div>
</template>