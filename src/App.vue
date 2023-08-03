<script setup>
import {
  kApp,
  kPage,
} from 'konsta/vue';
import { ref } from 'vue';
import BottomBar from './components/BottomBar.vue';
import QRCode from './components/Dialogs/QRCode.vue';
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';
import Topbar from './components/Topbar.vue';
const isIosTheme = ref(false)

import { storeToRefs } from 'pinia';
import { useAuthStore } from './stores/auth.store';

const { getLoginStatus } = storeToRefs(useAuthStore())

const popoverOpened = ref(false);
const popoverTargetRef = ref(null);

const openPopover = (targetRef) => {
  popoverTargetRef.value = targetRef;
  popoverOpened.value = true;
};
</script>

<template>
  <k-app :theme="isIosTheme ? 'ios' : 'material'">
    <k-page v-if="getLoginStatus">
      <Navbar />
      <router-view />
      <QRCode />
      <BottomBar />
    </k-page>
    <k-page v-else>
      <Topbar />
      <Login />
    </k-page>
  </k-app>
</template>

<style scoped></style>
