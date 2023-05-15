<script setup lang="ts">
import Navigation from "@/views/layout/NavigationView.vue";
import Mark from "@/components/icons/BookmarkEmpty.vue";
</script>
<template>
    <Navigation />
    <main>
        <div class="flex overflow-x-scroll pb-5 hide-scroll-bar w-screen">
            <div class="flex flex-wrap px-5 space-x-5 space-y-5">
                <div class="inline-block relative">
                    <div class="w-36 h-36 max-w-xs overflow-hidden rounded-3xl shadow-md bg-slate-900">
                        <img src="/public/imagess.jpg" alt="" class="w-36 h-36 object-cover">
                    </div>
                    <div class="absolute bottom-0 bg-gradient-to-t w-full h-1/2 rounded-3xl from-zinc-900">
                        <p class="font-medium text-xl px-5 pt-12  text-white">Full Body Stretching</p>
                        <div class="flex justify-between px-5 items-center">
                            <div class="flex justify-between space-x-2">
                                <div class="text-white text-sm">10 minutes</div>
                                <div class="text-white text-sm">|</div>
                                <div class="text-white text-sm">Intermediate</div>
                            </div>
                            <div>
                                <Mark class="w-7 h-7 brightness-200" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="inline-block relative">
                    <div class="w-36 h-36 max-w-xs overflow-hidden rounded-3xl shadow-md bg-slate-900">
                        <img src="/public/imagess.jpg" alt="" class="w-36 h-36 object-cover">
                    </div>
                    <div class="absolute bottom-0 bg-gradient-to-t w-full h-1/2 rounded-3xl from-zinc-900">
                        <p class="font-medium text-xl px-5 pt-12  text-white">Full Body Stretching</p>
                        <div class="flex justify-between px-5 items-center">
                            <div class="flex justify-between space-x-2">
                                <div class="text-white text-sm">10 minutes</div>
                                <div class="text-white text-sm">|</div>
                                <div class="text-white text-sm">Intermediate</div>
                            </div>
                            <div>
                                <Mark class="w-7 h-7 brightness-200" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="inline-block relative">
                    <div class="w-36 h-36 max-w-xs overflow-hidden rounded-3xl shadow-md bg-slate-900">
                        <img src="/public/imagess.jpg" alt="" class="w-36 h-36 object-cover">
                    </div>
                    <div class="absolute bottom-0 bg-gradient-to-t w-full h-1/2 rounded-3xl from-zinc-900">
                        <p class="font-medium text-xl px-5 pt-12  text-white">Full Body Stretching</p>
                        <div class="flex justify-between px-5 items-center">
                            <div class="flex justify-between space-x-2">
                                <div class="text-white text-sm">10 minutes</div>
                                <div class="text-white text-sm">|</div>
                                <div class="text-white text-sm">Intermediate</div>
                            </div>
                            <div>
                                <Mark class="w-7 h-7 brightness-200" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="inline-block relative">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-3xl shadow-md bg-slate-900">
                        <img src="/public/imagess.jpg" alt="" class="w-64 h-64 object-cover">
                    </div>
                    <div class="absolute bottom-0 bg-gradient-to-t w-full h-1/2 rounded-3xl from-zinc-900">
                        <p class="font-medium text-xl px-5 pt-12  text-white">Full Body Stretching</p>
                        <div class="flex justify-between px-5 items-center">
                            <div class="flex justify-between space-x-2">
                                <div class="text-white text-sm">10 minutes</div>
                                <div class="text-white text-sm">|</div>
                                <div class="text-white text-sm">Intermediate</div>
                            </div>
                            <div>
                                <Mark class="w-7 h-7 brightness-200" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>