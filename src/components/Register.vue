<script setup>
import {
  kButton,
  kListInput
} from 'konsta/vue';
import PhoneIcon from '../assets/icons/PhoneIcon.vue'
import InputIcon from '../assets/icons/InputIcon.vue';
import RadioGender from '../components/RadioGender.vue'
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import ClockCountdownIcon from '../assets/icons/ClockCountdownIcon.vue';
import Spinners270RingIcon from '../assets/icons/Spinners270RingIcon.vue';
const { t } = useI18n()

const timer = ref('02:00')
const showResendSMS = ref(false)
const isLoading = ref(false)

const isOTPSectionShow = ref(false)

var interval

function startTimer() {
  clearInterval(interval)
  interval = setInterval(function () {
    let time = localStorage.getItem('time')
    time = time.split(':')
    let minutes = time[0]
    let seconds = time[1]
    seconds -= 1
    if (minutes < 0) return
    else if (seconds < 0 && minutes !== 0) {
      minutes -= 1
      seconds = 59
    } else if (seconds < 10 && length.seconds !== 2) seconds = '0' + seconds

    timer.value = minutes + ':' + seconds
    localStorage.setItem('time', timer.value)

    if (minutes === 0 && seconds === 0) clearInterval(interval)
    if (localStorage.getItem('time') === '-1:59') {
      clearInterval(interval)
      showResendSMS.value = true
    }
  }, 1000)
}

const submitForm = reactive({
  firstname: '',
  lastname: '',
  phone: '',
  code: '',
  smsConfirmation: false,
})

const handleOnComplete = (code) => {
  submitForm.code = code
  createCustomer()
}

const sendActivationCode = () => {
  isOTPSectionShow.value = true
  // if (!submitForm.firstname) {
  //   notify.warning({
  //     message: t('plsEnterFirstname'),
  //   })
  // } else if (!submitForm.lastname) {
  //   notify.warning({
  //     message: t('plsEnterLastname'),
  //   })
  // } else if (!submitForm.phone) {
  //   notify.warning({
  //     message: t('plsEnterPhone'),
  //   })
  // } else if (!selectGender.value?.id) {
  //   notify.warning({
  //     message: t('plsSelectGender'),
  //   })
  // } else if (submitForm.smsConfirmation) {
  //   CustomerService.sendActivationCode(submitForm.phone.replace(/([() -])/g, ''))
  //     .then(() => {
  //       notify.success({
  //         message: t('verificationCodeSentSuccessfully'),
  //       })
  //     })
  //     .catch(() => {
  //       notify.error({
  //         message: t('errorSendingVerificationCode'),
  //       })
  //       showResendSMS.value = true
  //     })
  //   localStorage.setItem('time', '02:00')
  //   startTimer()
  //   registerProcess.registerMode = false
  //   registerProcess.checkingMode = true
  // } else createCustomer()
  console.log('Send activation');
  console.log(submitForm);
  showResendSMS.value = false
  localStorage.setItem('time', '02:00')
  startTimer()
}
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full h-screen p-5">
    <img src="/alpha-sport-urgench-logo.png" alt="Alphasport" class="w-3/4">
    <div class="flex items-center justify-center mt-5">
      <div class="w-full">
        <div v-if="isOTPSectionShow" class="mt-5 list-none">
          <div class="flex justify-center">
            <div class="flex flex-col">
              <div class="px-3 text-xl text-center text-gray-600 dark:text-gray-300">
                {{ $t('verificationCodeHasBeenSentToTheNumberBelow') }}
                <strong class="ml-2 text-black dark:text-gray-300">{{ submitForm.phone }}</strong>
              </div>
              <div class="flex justify-center my-5">
                <v-otp-input ref="otpInput"
                  input-classes="otp-input mx-2 w-9 border border-gray-300 rounded text-center p-0 py-1.5 text-xl"
                  separator=" " :num-inputs="4" :should-auto-focus="true" :is-input-num="true"
                  :conditionalClass="['one', 'two', 'three', 'four']" :placeholder="['', '', '', '']"
                  @on-complete="handleOnComplete" />
              </div>
              <div v-if="showResendSMS" @click="sendActivationCode()"
                class="flex justify-center my-3 text-lg text-red-500 cursor-pointer hover:underline">
                {{ $t('didNotreceiveSms') }}
              </div>
              <div v-else-if="!isLoading" class="flex items-center justify-center my-3 space-x-2 text-xl text-red-600">
                <ClockCountdownIcon class="w-6 h-6" />
                <span>{{ timer }}</span>
              </div>
              <div v-else class="flex items-center justify-center my-3 space-x-2 text-xl text-red-600">
                <button class="w-16 py-2 pl-2 text-base text-white bg-blue-500 rounded-md select-none">
                  <div class="flex items-center justify-center">
                    <Spinners270RingIcon
                      class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" />
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mt-5 list-none">
          <k-list-input floating-label @input="(e) => submitForm.firstname = e.target.value" :label="$t('firstname')" type="text"
            placeholder="Karl">
            <template #media>
              <InputIcon class="w-7 h-7" />
            </template>
          </k-list-input>
          <k-list-input floating-label @input="(e) => submitForm.lastname = e.target.value" :label="$t('lastname')" type="text"
            placeholder="Karl">
            <template #media>
              <InputIcon class="w-7 h-7" />
            </template>
          </k-list-input>
          <RadioGender />
          <k-list-input floating-label @input="(e) => submitForm.phone = e.target.value" :label="$t('phone')" type="phone"
            placeholder="+998(90) 000-00-00">
            <template #media>
              <PhoneIcon class="w-7 h-7" />
            </template>
          </k-list-input>
        </div>
        <div class="px-4 mt-10 space-y-5">
          <k-button tonal :large="true" v-if="isOTPSectionShow">{{ $t('submit') }}</k-button>
          <k-button tonal v-else :large="true" @click="sendActivationCode()">{{ $t('next') }}</k-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>