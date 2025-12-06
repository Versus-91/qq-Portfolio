<template>
  <UApp>
    <UHeader>
      <template #title>
        Portfolio
      </template>
      <UNavigationMenu v-model="activeNavMenu" color="info" :items="items" />
      <template #right>
        <UColorModeButton></UColorModeButton>
        <UButton color="neutral" variant="ghost" to="https://github.com/Versus-91" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
        <UButton color="neutral" variant="ghost" to="https://www.linkedin.com/in/qader-qaribiyan/" target="_blank"
          icon="i-simple-icons-linkedin" aria-label="LinkedIn" />
      </template>
    </UHeader>
    <NuxtPage ref="nav">
    </NuxtPage>
  </UApp>

</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

let activeNavMenu = ref('');

const childRef = useTemplateRef('nav')

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Projects',
    to: '/',
    active: activeNavMenu.value == 'Projects',
    onSelect(e) {
      activeNavMenu.value = 'Projects';
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, {
    label: 'About me',
    to: '/',
    active: activeNavMenu.value == 'About',
    onSelect(e) {
      activeNavMenu.value = 'About';
      const element = document.getElementById("about");
      element?.scrollIntoView({ behavior: 'smooth' });
    },
  }, {
    label: 'Resume',
    to: '/',
    active: activeNavMenu.value == 'Resume',
    onSelect(e) {
      activeNavMenu.value = 'Resume';
      const element = document.getElementById("tttt");
      element?.scrollIntoView({ behavior: 'smooth' });
    },
  }
])
</script>