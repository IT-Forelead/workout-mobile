<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue'
const value = ref('a56d8e8b-fa15-4490-a144-8e4615193295')
const size = ref(200)
</script>
<template>
    <qrcode-vue class="w-8 h-8" :value="value" :size="size" level="H" />
</template>
