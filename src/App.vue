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
      <router-view/>
      <QRCode />
      <BottomBar />
    </k-page>
    <k-page v-else>
      <Login />
    </k-page>
  </k-app>
</template>

<style scoped></style>
