<script setup>
import {
  kButton,
  kListInput,
  kBlockTitle
} from 'konsta/vue';
import PasswordIcon from '../icons/PasswordIcon.vue'
import PhoneIcon from '../icons/PhoneIcon.vue'
import { useAuthStore } from '../stores/auth.store'

const { setLogin } = useAuthStore()

</script>
<template>
  <div class="flex flex-col items-center justify-center w-full h-screen p-5">
    <img src="/alpha-sport-urgench-logo.png" alt="Alphasport" class="w-3/4">
    <k-block-title class="text-2xl font-bold text-gray-900">Login Section</k-block-title>
    <div class="flex items-center justify-center">
      <div class="w-full">
        <div>
          <k-list-input floating-label label="Phone number" type="phone" placeholder="Your phone">
            <template #media>
              <PhoneIcon class="w-7 h-7" />
            </template>
          </k-list-input>
          <k-list-input floating-label label="Password" type="password" placeholder="Your password">
            <template #media>
              <PasswordIcon class="w-8 h-7" />
            </template>
          </k-list-input>
        </div>
        <div class="px-4 mt-10 space-y-5">
          <k-button tonal :large="true" @click="setLogin(true)">Login</k-button>
          <!-- <k-button tonal>Register</k-button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>