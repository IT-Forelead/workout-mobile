
<script setup>
import {
  kIcon,
  kTabbar,
  kTabbarLink
} from 'konsta/vue';
import CartIcon from '../icons/CartIcon.vue';
import HomeIcon from '../icons/HomeIcon.vue';
import QRIcon from '../icons/QRIcon.vue';
import ReportIcon from '../icons/ReportIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import { useDialogStore } from '../stores/dialog.store';

const { openQRDialog } = useDialogStore()
// const { isDark } = defineProps({
//   isDark: Boolean
// })
</script>
<template>
  <k-tabbar labels icons class="fixed bottom-0 left-0">
    <k-tabbar-link label="Home">
      <template #icon>
        <k-icon>
          <template #ios>
            <HomeIcon class="w-9 h-9" />
          </template>
          <template #material>
            <HomeIcon class="w-9 h-9" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
    <k-tabbar-link label="Store">
      <template #icon>
        <k-icon>
          <template #ios>
            <CartIcon class="w-9 h-9" />
          </template>
          <template #material>
            <CartIcon class="w-9 h-9" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
    <k-tabbar-link @click="openQRDialog()">
      <template #icon>
        <k-icon class="p-3 rounded-full shadow-xl bg-white">
          <template #ios>
            <QRIcon class="w-8 h-8" />
          </template>
          <template #material>
            <QRIcon class="w-8 h-8" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
    <k-tabbar-link label="Reports">
      <template #icon>
        <k-icon>
          <template #ios>
            <ReportIcon class="w-9 h-9" />
          </template>
          <template #material>
            <ReportIcon class="w-9 h-9" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
    <k-tabbar-link label="Account">
      <template #icon>
        <k-icon>
          <template #ios>
            <UserIcon class="w-9 h-9" />
          </template>
          <template #material>
            <UserIcon class="w-9 h-9" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
  </k-tabbar>
</template>

<style lang="scss" scoped></style>