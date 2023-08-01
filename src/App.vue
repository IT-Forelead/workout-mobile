<script setup>
import {
  kApp,
  kButton,
  kList, kListItem,
  kPage,
  kToggle,
  kCard
} from 'konsta/vue';
import { ref } from 'vue';
import BottomBar from './components/BottomBar.vue';
import Navbar from './components/Navbar.vue';
import Login from './components/Login.vue';
import QRCode from './components/Dialogs/QRCode.vue';
const isIosTheme = ref(false)
const isDark = ref(false)

import { useAuthStore } from './stores/auth.store'
import { storeToRefs } from 'pinia'

const { getLoginStatus } = storeToRefs(useAuthStore())
</script>

<template>
  <k-app :theme="isIosTheme ? 'ios' : 'material'">
    <k-page v-if="getLoginStatus">
      <Navbar />
      <!-- <k-list strong inset>
        <k-list-item label title="Theme">
          <template #after>
            <k-toggle component="div" :checked="isIosTheme === true" @change="() => (isIosTheme = !isIosTheme)" />
          </template>
        </k-list-item>
      </k-list> -->
      <!-- <k-list strong inset>
        <k-list-item label title="Dark">
          <template #after>
            <k-toggle component="div" :checked="isDark === true" @change="() => (isDark = !isDark)" />
          </template>
        </k-list-item>
      </k-list> -->
      <div class="flex items-center w-full p-5">
        <img src="/alpha-sport-urgench-logo.png" alt="Alphasport">
      </div>
      <k-card class="text-center">
        <br>
        Coming soon...
        <br>
        <br>
      </k-card>
      <QRCode />
      <BottomBar :is-dark="isDark" />
    </k-page>
    <k-page v-else>
      <Login />
    </k-page>
  </k-app>
</template>

<style scoped></style>
