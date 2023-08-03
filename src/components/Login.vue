<script setup>
import {
  kButton,
  kListInput,
  kBlockTitle
} from 'konsta/vue';
import PasswordIcon from '../assets/icons/PasswordIcon.vue'
import PhoneIcon from '../assets/icons/PhoneIcon.vue'
import { useAuthStore } from '../stores/auth.store'
import Register from './Register.vue';
import { ref } from 'vue';

const { setLogin } = useAuthStore()
const isResterShow = ref(false)
</script>
<template>
  <div v-if="!isResterShow"
    class="flex flex-col items-center justify-center w-full h-screen p-5 bg-[url('/welcome.jpg')] bg-cover bg-no-repeat bg-center relative">
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900">
    </div>
    <img src="/alpha-sport-urgench-logo.png" alt="Alphasport" class="w-3/4">
    <div class="flex items-center justify-center mt-5">
      <div class="w-full">
        <div class="mt-5 list-none">
          <k-list-input floating-label :label="$t('phone')" type="phone" placeholder="+998(90) 000-00-00">
            <template #media>
              <PhoneIcon class="w-7 h-7" />
            </template>
          </k-list-input>
          <k-list-input floating-label :label="$t('password')" type="password" placeholder="********">
            <template #media>
              <PasswordIcon class="w-8 h-7" />
            </template>
          </k-list-input>
        </div>
        <div class="px-4 mt-10 space-y-5">
          <k-button tonal :large="true" @click="setLogin(true)">{{ $t('login') }}</k-button>
          <k-button tonal :large="true" @click="isResterShow = true">{{ $t('registration') }}</k-button>
        </div>
      </div>
    </div>
  </div>
  <Register v-else />
</template>
<style lang="scss" scoped></style>