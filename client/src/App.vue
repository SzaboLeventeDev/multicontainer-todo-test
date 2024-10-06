<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import TheAppHeader from './components/layout/TheAppHeader.vue';
  
  const route = useRoute();
  const navLinkStyle =
    'uppercase text-l px-3 py-1 bg-slate-200 dark:bg-white rounded-lg transition-all duration-300';
  const currentRouteStyle =
    'border-b-2 border-green-600 shadow-lg shadow-green-500/50';
  const hoverNavLinkStyle =
    'lg:hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/50 active:translate-y-0';
</script>

<template>
  <the-app-header />

  <main class="flex flex-col bg-white dark:bg-slate-800 min-h-screen">
    <div class="flex justify-evenly py-6">
      <div :class="[navLinkStyle, hoverNavLinkStyle]">
        <router-link :to="{ name: 'MyTaskList' }">
          <h2>My tasks</h2>
          <div
            :class="[route.name === 'MyTaskList' ? currentRouteStyle : '']"
          />
        </router-link>
      </div>
      <div :class="[navLinkStyle, hoverNavLinkStyle]">
        <router-link :to="{ name: 'NewTask' }" :class="hoverNavLinkStyle">
          <h2>New task</h2>
          <div :class="[route.name === 'NewTask' ?currentRouteStyle: '']" />
        </router-link>
      </div>
    </div>
    <RouterView class="flex-grow" />
  </main>
</template>
