<script setup>
import {
  kDialog,
  kDialogButton
} from 'konsta/vue';
import { storeToRefs } from 'pinia';
import QRCodeVue3 from "qrcode-vue3";
import { useDialogStore } from '../../stores/dialog.store';

const { getQRDialogStatus } = storeToRefs(useDialogStore())
const { closeQRDialog } = useDialogStore()
</script>
<template>
  <k-dialog :opened="getQRDialogStatus" @backdropclick="closeQRDialog()">
    <template #title>Your QR Code</template>
    <div class="p-2 bg-white rounded-xl">
      <QRCodeVue3 
      value="Hello Karl!"
      :image="'/alpha-sport-urgench-logo.png'"
      :dotsOptions="{color: '#000', type: 'classy'}"/>
    </div>
    <template #buttons>
      <k-dialog-button strong @click="closeQRDialog()">OK</k-dialog-button>
    </template>
  </k-dialog>
</template>

<style lang="scss" scoped></style>