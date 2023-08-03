<script setup>
import { onMounted, ref } from 'vue'
// import { useDropdownStore } from '../../store/dropdown.store'
import { useI18n } from 'vue-i18n'
import GenderMaleIcon from '../assets/icons/GenderMaleIcon.vue'
import GenderFemaleIcon from '../assets/icons/GenderFemaleIcon.vue'

const props = defineProps({
  gender: null,
})

const { t } = useI18n()

const list = [
  {
    id: 'male',
    name: t('male')
  },
  {
    id: 'female',
    name: t('female')
  },
]

const optionClicked = (data) => {
  // useDropdownStore().setSelectGenderOption(data)
}

const isMale = ref(true)

onMounted(() => {
  if (props.gender === 'male') {
    // useDropdownStore().setSelectGenderOption(list[0])
    isMale.value = true
  } else {
    // useDropdownStore().setSelectGenderOption(list[1])
    isMale.value = false
  }
})
</script>
<template>
  <div class="px-4 select-none">
    <div class="flex items-center justify-around w-full text-lg bg-gray-100 border-none rounded-lg focus:ring-0 outline-0">
      <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" :checked="isMale" />
      <label for="toggle-on" @click="optionClicked(list[0])"
        class="relative flex items-center justify-center py-2 space-x-3">
        <GenderMaleIcon class="w-7 h-7" />
        <span>{{ $t('male') }}</span>
      </label>
      <input id="toggle-off" @click="optionClicked(list[1])" class="toggle toggle-right" name="toggle" value="true"
        type="radio" :checked="!isMale"/>
      <label for="toggle-off" class="relative flex items-center justify-center py-2 space-x-3">
        <GenderFemaleIcon class="w-7 h-7" />
        <span>{{ $t('female') }}</span>
      </label>
    </div>
  </div>
</template>
<style scoped>
input[type='radio'].toggle {
  @apply hidden;
}

input[type='radio'].toggle+label {
  @apply cursor-pointer;
  @apply text-gray-900;
  @apply w-1/2;
}

input[type='radio'].toggle.toggle-left+label {
  @apply border-r-0;
}

input[type='radio'].toggle.toggle-left+label:after {
  @apply left-full;
}

input[type='radio'].toggle.toggle-right+label {
  @apply -ml-1;
}

input[type='radio'].toggle.toggle-right+label:after {
  @apply -left-full;
}

input[type='radio'].toggle:checked+label {
  @apply cursor-default;
  @apply text-blue-500;
  @apply bg-white;
  @apply border-4;
  @apply border-gray-100;
  @apply rounded-lg;
}

input[type='radio'].toggle:checked+label>span {
  @apply inline-block;
}

input[type='radio'].toggle:checked+label:after {
  @apply left-0;
}
</style>