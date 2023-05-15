<script setup lang="ts">
import Back from "@/components/icons/Back.vue"
import More from "@/components/icons/More.vue"
import {useRouter, type Router} from "vue-router";

const router: Router = (useRouter())
const back = () => {
    router.push('/dashboard')
}
</script>
<template>
    <div class="flex p-5 justify-between top-0 sticky z-10 absolute w-full bg-white">
        <div class="block">
            <div class="flex space-x-5 items-center">
                <Back class="w-6 h-6" @click="back"/>
                <div class="text-xl font-bold">Title</div>
            </div>
        </div>
        <More class="w-6 h-6"/>
    </div>
</template>