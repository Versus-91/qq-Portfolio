<template>
  <UApp>
    <UHeader>
      <template #title>
        Portfolio
      </template>
      <UNavigationMenu v-model="activeNavMenu" color="info" :items="items" />
      <template #right>
        <UColorModeButton></UColorModeButton>
        <UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
        <UButton color="neutral" variant="ghost" to="https://www.linkedin.com/in/qader-qaribiyan/" target="_blank"
          icon="i-simple-icons-linkedin" aria-label="LinkedIn" />
      </template>
    </UHeader>
    <NuxtPage>
    </NuxtPage>
  </UApp>

</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

let activeNavMenu = ref('Projects')
const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Projects',
    to: '/',
    active: activeNavMenu.value == 'Projects'
  }
])
</script>