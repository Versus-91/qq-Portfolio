<template>
    <div class="flex flex-row w-full mb-2 text-left">
        <div class="basis-2/3 border-cyan-300">
            <h4 class="text-blue-600 font-bold dark:text-cyan-400">{{ title }}</h4>
        </div>
        <div class="basis-1/3 text-right">
            <h4 class="text-blue-600 font-bold">{{ date }}</h4>
        </div>
    </div>
    <slot></slot>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    date: string
}>()


</script>
