<template>
  <UApp>
    <UHeader>
      <template #title>
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
const carousel_items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]

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
  },
  {
    label: 'Github',
    to: 'https://github.com/Versus-91',
    target: '_blank',
  }
])
</script>