<script setup>
import {
  kIcon,
  kNavbar,
  kTabbarLink
} from 'konsta/vue';
import SearchIcon from '../icons/SearchIcon.vue';
</script>

<template>
  <k-navbar title="Navbar" class="sticky top-0">
    <template #right>
      <kTabbarLink>
        <template #icon>
          <kIcon>
            <template #ios>
              <SearchIcon class="w-8 h-8" />
            </template>
            <template #material>
              <SearchIcon class="w-8 h-8" />
            </template>
          </kIcon>
        </template>
      </kTabbarLink>
    </template>
  </k-navbar>
</template>

<style scoped></style>
