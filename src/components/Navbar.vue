<script setup>
import {
  kIcon,
  kNavbar,
  kTabbarLink
} from 'konsta/vue';
import BellIcon from '../icons/BellIcon.vue';
</script>

<template>
  <k-navbar title="Alpha Sport" class="sticky top-0 z-50">
    <template #right>
      <kTabbarLink>
        <template #icon>
          <kIcon>
            <template #ios>
              <BellIcon class="w-8 h-8" />
            </template>
            <template #material>
              <BellIcon class="w-8 h-8" />
            </template>
          </kIcon>
        </template>
      </kTabbarLink>
    </template>
  </k-navbar>
</template>

<style scoped></style>
