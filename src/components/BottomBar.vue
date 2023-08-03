<script setup>
import { kIcon, kTabbar, kTabbarLink } from "konsta/vue";
import CartIcon from "../assets/icons/CartIcon.vue";
import HomeIcon from "../assets/icons/HomeIcon.vue";
import QRIcon from "../assets/icons/QRIcon.vue";
import ReportIcon from "../assets/icons/ReportIcon.vue";
import UserIcon from "../assets/icons/UserIcon.vue";
import { useDialogStore } from "../stores/dialog.store";

const { openQRDialog } = useDialogStore();
// const { isDark } = defineProps({
//   isDark: Boolean
// })
</script>
<template>
  <k-tabbar labels icons class="fixed bottom-0 left-0 z-50">
    <router-link to="/" active-class="text-red-600">
      <k-tabbar-link label="Home">
        <template #icon>
          <k-icon>
            <template #material :class="'py-0'">
              <HomeIcon class="w-8 h-8" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </router-link>
    <router-link to="/store" active-class="text-red-600">
      <k-tabbar-link label="Store">
        <template #icon>
          <k-icon>
            <template #material>
              <CartIcon class="w-8 h-8" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </router-link>
    <div>
      <k-tabbar-link @click="openQRDialog()">
        <template #icon>
          <k-icon class="p-3 bg-white rounded-full shadow-xl">
            <template #material>
              <QRIcon class="w-8 h-8" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </div>
    <router-link to="/reports">
      <k-tabbar-link label="Reports">
        <template #icon>
          <k-icon>
            <template #material>
              <ReportIcon class="w-8 h-8" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </router-link>
    <router-link to="/account">
      <k-tabbar-link label="Account">
        <template #icon>
          <k-icon>
            <template #material>
              <UserIcon class="w-8 h-8" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </router-link>
  </k-tabbar>
</template>

<style scoped>
</style>
