<script setup>
import {
  kNavbar,
  kPopover,
  kList,
  kListItem,
  kTabbarLink
} from 'konsta/vue';
import { onClickOutside } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n.js'
import TranslateIcon from '../assets/icons/TranslateIcon.vue'
import ArrowDownIcon from '../assets/icons/ArrowDownIcon.vue'

const popoverOpened = ref(false);
const popoverTargetRef = ref(null);

const openPopover = (targetRef) => {
  popoverTargetRef.value = targetRef;
  popoverOpened.value = true;
};

/* Translate btn */
const { t } = useI18n()
const currentLang = ref('')

const list = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'ru',
    name: 'Русский'
  },
  {
    id: 'uz',
    name: "O'zbekcha"
  },
  {
    id: 'kr',
    name: "Ўзбекча"
  },
]

const langTranslate = (lang) => {
  if (lang) return lang
  else return "UZ"
}

const changeLang = (lang) => {
  currentLang.value = lang.id
  localStorage.setItem('lang', lang.id)
  i18n.global.locale.value = lang.id
  document.getElementsByTagName('title')[0].innerHTML = t('title')
  popoverOpened.value = false
}

onMounted(() => {
  currentLang.value = langTranslate(localStorage.getItem('lang'))
  document.getElementsByTagName('title')[0].innerHTML = t('title')
})
</script>

<template>
  <k-navbar class="fixed top-0" :transparent="true">
    <template #left>
      <!-- <k-tabbar-link navbar>
        <ArrowDownIcon class="rotate-90 w-9 h-9" />
      </k-tabbar-link> -->
    </template>
    <template #right>
      <div class="flex items-center justify-center p-2 mr-5 space-x-1 bg-indigo-100 popover-navbar-link rounded-xl" navbar
        @click="() => openPopover('.popover-navbar-link')">
        <TranslateIcon class="w-5 h-5" />
        <p class="uppercase">{{ currentLang }}</p>
        <ArrowDownIcon class="w-5 h-5" />
      </div>
    </template>
  </k-navbar>
  <k-popover :opened="popoverOpened" :target="popoverTargetRef" @backdropclick="() => (popoverOpened = false)">
    <k-list nested>
      <k-list-item v-for="(lang, idx) in list" :key="idx" @click="changeLang(lang)" :title="lang?.name" />
    </k-list>
  </k-popover>
</template>

<style scoped></style>
