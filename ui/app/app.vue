<template>
  <UApp>
    <UHeader>
      <template #title>
        Portfolio
      </template>
      <UNavigationMenu :items="items" />
      <template #right>
        <UColorModeButton></UColorModeButton>
        <UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
      </template>
    </UHeader>
    <NuxtPage>
    </NuxtPage>
  </UApp>

</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Projects',
    to: '/',
    active: route.path == '/'
  },
  {
    label: 'Resume',
    to: '/',
    active: route.path.startsWith('/docs/components')
  }
])
</script>