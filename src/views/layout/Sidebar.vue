<script setup lang="ts">
import UserIcon from "@/components/icons/User.vue"
import Compass from "@/components/icons/Compass.vue"
import HomeIcon from "@/components/icons/Home.vue"
import StatsUpIcon from "@/components/icons/StatsUp.vue"
import QrCode from "@/components/icons/QrCode.vue"
import QRCodeGeneratir from "@/views/layout/QRCodeGeneratir.vue";
import { ref } from 'vue'

import {onClickOutside} from "@vueuse/core";


const isOpenLangDropDown = ref(false)
const toggleLangDropDown = () => {

    isOpenLangDropDown.value = !isOpenLangDropDown.value
}
const onClickOutsideModal = ref(null)
onClickOutside(onClickOutsideModal, (event) => isOpenLangDropDown.value = false)
</script>
<template>
    <div class="fixed inset-0 z-50 w-screen h-screen bg-stone-950/70 flex items-center justify-center overflow-y-auto" v-if="isOpenLangDropDown" ref="modalRef" >
        <div class="bg-white p-5 opacity-100 rounded-3xl">
            <QRCodeGeneratir />
            <div class="flex justify-center pb-5 pt-10 text-3xl">Scan me</div>
        </div>
    </div>
  <div class="absolute w-full sticky bottom-0 z-10">
    <div class="grid grid-cols-5">
      <div class="col-span-2 grid grid-cols-2 bg-white p-2">
        <div class="grid col-span-1 justify-items-center">
          <HomeIcon class="w-7 h-7"/>
          <div class="text-xs">Home</div>
        </div>
        <div class="grid col-span-1 justify-items-center">
          <Compass class="w-7 h-7"/>
          <div class="text-xs">Discover</div>
        </div>
      </div>
      <div class="grid col-span-1 justify-items-center relative">
        <div class="absolute element-cr w-28 px-4 h-14">

        </div>
        <div class="absolute p-3 bg-white rounded-full fixed shadow-md -translate-y-1/2" @click="toggleLangDropDown()" ref="onClickOutsideModal">
          <QrCode class="w-8 h-8"/>
        </div>
        <div class="bg-white w-full h-5 bottom-0 absolute"></div>
      </div>
      <div class="col-span-2 grid grid-cols-2 bg-white p-2">
        <div class="grid col-span-1 justify-items-center">
          <StatsUpIcon class="w-7 h-7"/>
          <div class="text-xs">Insight</div>
        </div>
        <div class="grid col-span-1 justify-items-center">
          <UserIcon class="w-7 h-7"/>
          <div class="text-xs">Profile</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.element-cr {
  border-radius: 0 0 12rem 12rem;
  border: 1.3rem solid white;
  border-top: 0;

}


</style>